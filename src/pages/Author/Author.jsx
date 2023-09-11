import React, {Fragment, useContext, useEffect, useState} from 'react';
import api from "../../config/api/api";
import {useParams} from "react-router-dom";
import {CustomContext} from "../../config/context/context";
import Card from "../../components/Card/Card";


const Author = () => {

    const {id} = useParams();



    const{authorCatalog, getAuthorCatalog, author, getOneAuthor} = useContext(CustomContext);

    useEffect(() => {
        getOneAuthor(id)
    }, []);

    useEffect(()=>{
        getAuthorCatalog(author.name)
    },[author]);

    console.log(author);

    console.log(authorCatalog);

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
                        <h2 className="author__title">Все книги</h2>
                        <div className="catalog__row">
                            {
                                authorCatalog.map((item, idx)=>(
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