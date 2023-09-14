import React, {Fragment, useContext, useEffect, useState} from 'react';
import api from "../../config/api/api";
import {useParams} from "react-router-dom";
import {CustomContext} from "../../config/context/context";
import Card from "../../components/Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {getOneAuthor} from "../../redux/reducers/oneAuthor.js";
import {useGetAuthorsQuery, useGetProductsQuery} from "../../redux/api/api.js";


const Author = () => {

    const {id} = useParams();

    // const{authorCatalog, getAuthorCatalog, author, getOneAuthor} = useContext(CustomContext);
    //
    // useEffect(() => {
    //     getOneAuthor(id)
    // }, []);
    //
    // useEffect(()=>{
    //     getAuthorCatalog(author.name)
    // },[author]);
    //
    // console.log(author);

    const dispatch = useDispatch()
    const {author} = useSelector(store => store.author)


    useEffect(() => {
        dispatch(getOneAuthor(id))
    }, [author.name])

    console.log(author.name)


    const {data} = useGetProductsQuery({author: author.name})


    console.log(data)



    const addPoint = () => {

        const rating = {
            count: author.ratingView.count + 1,
            point: author.ratingView.point + 10
        }

        api(`authors/${id}`,{
            method:'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            json:{
                ratingView: rating
            }
        } )
            .then(res => alert('все изменилось'))
    }



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
                            </div>
                        </div>
                        <button onClick={addPoint}>добавить балл</button>
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