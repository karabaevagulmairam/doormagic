import React, {Fragment, useEffect, useState} from 'react';
import api from "../../config/api/api";
import {useParams} from "react-router-dom";
import Card from "../../components/Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {getOneAuthor} from "../../redux/reducers/oneAuthor.js";
import {useGetProductsQuery} from "../../redux/api/api.js";


const Author = () => {

    const {id} = useParams();
    const dispatch = useDispatch()
    const {author} = useSelector(store => store.author)
    const [selectedRating, setSelectedRating] = useState(0);

    useEffect(() => {
        dispatch(getOneAuthor(id))
    }, [author.name])

    console.log(author.name)


    const {data} = useGetProductsQuery({author: author.name})





    const addPoint = () => {
        // Проверяем, что пользователь выбрал рейтинг
        if (selectedRating === 0) {
            alert('Выберите рейтинг перед отправкой.');
            return;
        }

        // Отправляем выбранный рейтинг на сервер
        const newRating = {
            count: author.ratingView.count + 1,
            point: author.ratingView.point + selectedRating,
        };

        api(`authors/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            json: {
                ratingView: newRating,
            },
        })
            .then((res) => {
                alert('Рейтинг успешно добавлен.');
                // Можно также обновить состояние автора с новым рейтингом, чтобы отобразить его без перезагрузки страницы
                // dispatch(getOneAuthor(id));
            })
            .catch((error) => {
                console.error('Ошибка при добавлении рейтинга:', error);
            });
    };


    if ('id' in author) {
        return (
            <>
                <div className="author">
                    <div className="container">
                        <div className="author__row">
                            <img src={author.image} alt="" className="author__img"/>
                            <div className="author__card">
                                <h2 className="author__name">{author.name}</h2>
                                <p className="author__desc">{author.description}</p>
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
                            {
                                data?.map((item, idx)=>(
                                    <Fragment key={item.id || idx}>
                                        <Card item={item}/>
                                    </Fragment>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </>

        );
    } else {
        return <h2>Loading...</h2>
    }
};

export default Author;