import React, {Fragment, useEffect, useState} from 'react';
import api from "../../config/api/api";
import {useParams} from "react-router-dom";
import Card from "../../components/Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {getOneAuthor, updateAuthorRating} from "../../redux/reducers/oneAuthor.js";
import {useGetProductsQuery} from "../../redux/api/api.js";


const Author = () => {

    const {id} = useParams();
    const dispatch = useDispatch()
    const {author} = useSelector(store => store.author)
    const {user} = useSelector(store => store.user)
    const [selectedRating, setSelectedRating] = useState(0);




    useEffect(() => {
        dispatch(getOneAuthor(id))
        const existingReviewUser = author.ratingView?.find(review => parseInt(review.userId) === parseInt(user.id))
        if(existingReviewUser){
            setSelectedRating(existingReviewUser.point)
        }
    }, [author?.name])

    console.log(author)


    const {data} = useGetProductsQuery({author: author?.name})


    const addPoint = () => {
        // Проверьте, что пользователь выбрал рейтинг и выполнил другие проверки, если необходимо
        const existingReviewUser = author?.ratingView.some(review => parseInt(review.userId) === parseInt(user.id))
        if(existingReviewUser){
            alert("Вы ранее оставляли отзыв")
            return
        }
        // Отправьте выбранный рейтинг на сервер
        const newRating = {
            point: selectedRating, userId: user.id
        };

        dispatch(updateAuthorRating({
            id: id, // ID автора
            ratingData: [...author?.ratingView, newRating], // Новый рейтинг
        }))
            .then(() => {
                alert("Отзыв успешно добавлен.");
                // Обновите состояние автора с новым рейтингом без перезагрузки страницы
            })
            .catch((error) => {
                console.error("Ошибка при добавлении отзыва:", error);
            });
    };


        return (<>
                <div className="author">
                    <div className="container">
                        <div className="author__row">
                            <img src={author?.image} alt="" className="author__img"/>
                            <div className="author__card">
                                <h2 className="author__name">{author?.name}</h2>
                                <p className="author__desc">{author?.description}</p>
                                <div className="author__rating">
                                    <span>Выберите рейтинг:</span>
                                    <div className="rating__stars">
      <span
          className={`star ${selectedRating >= 1 ? 'selected' : ''}`}
          onClick={() => setSelectedRating(1)}
      >
        ★
      </span>
                                        <span
                                            className={`star ${selectedRating >= 2 ? 'selected' : ''}`}
                                            onClick={() => setSelectedRating(2)}
                                        >
        ★
      </span>
                                        <span
                                            className={`star ${selectedRating >= 3 ? 'selected' : ''}`}
                                            onClick={() => setSelectedRating(3)}
                                        >
        ★
      </span>
                                        <span
                                            className={`star ${selectedRating >= 4 ? 'selected' : ''}`}
                                            onClick={() => setSelectedRating(4)}
                                        >
        ★
      </span>
                                        <span
                                            className={`star ${selectedRating >= 5 ? 'selected' : ''}`}
                                            onClick={() => setSelectedRating(5)}
                                        >
        ★
      </span>
                                    </div>
                                </div>
                                <button onClick={addPoint}>Добавить балл</button>
                            </div>
                        </div>
                        <h2 className="author__title">Все книги автора</h2>
                        <div className="catalog__row">
                            {data?.map((item, idx) => (<Fragment key={item?.id || idx}>
                                    <Card item={item}/>
                                </Fragment>))}
                        </div>
                    </div>
                </div>
            </>

        );

};

export default Author;