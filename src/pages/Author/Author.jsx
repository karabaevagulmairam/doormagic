import React, {useEffect, useState} from 'react';
import api from "../../config/api/api";
import {useParams} from "react-router-dom";

const Author = () => {

    const {id} = useParams();

    const [author, setAuthor] = useState({});

    useEffect(() => {
        api(`authors/${id}`).json()
            .then((res) => setAuthor(res))
    }, []);

    console.log(author)

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
                    </div>
                </div>
            </>

        );
    } else {
        return <h2>Loading...</h2>
    }
};

export default Author;