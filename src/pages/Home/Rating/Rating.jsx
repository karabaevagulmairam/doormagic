import React from 'react';
import {Link} from "react-router-dom"

const Rating = () => {
    return (
        <section className="rating">
            <div className="container">
                <h2 className="title">Какой жанр предпочитаешь?ч</h2>

                <div className="rating__row">
                    <div className="rating__card">
                        <Link className="rating-img">
                            <img className="rating__img" src="https://ekb.topkvestov.ru/storage/app/uploads/public/5f4/61e/957/5f461e95760af679866969.jpg" alt=""/>
                        </Link>
                        <p className="rating__desc">Детективы</p>
                    </div>
                    <div className="rating__card">
                        <Link className="rating-img">
                            <img className="rating__img" src="https://ekb.topkvestov.ru/storage/app/uploads/public/5f4/61e/957/5f461e95760af679866969.jpg" alt=""/>
                        </Link>
                        <p className="rating__desc">Детективы</p>
                    </div>
                    <div className="rating__card">
                        <Link className="rating-img">
                            <img className="rating__img" src="https://ekb.topkvestov.ru/storage/app/uploads/public/5f4/61e/957/5f461e95760af679866969.jpg" alt=""/>
                        </Link>
                        <p className="rating__desc">Детективы</p>
                    </div>
                    <div className="rating__card">
                        <Link className="rating-img">
                            <img className="rating__img" src="https://ekb.topkvestov.ru/storage/app/uploads/public/5f4/61e/957/5f461e95760af679866969.jpg" alt=""/>
                        </Link>
                        <p className="rating__desc">Детективы</p>
                    </div>
                    <div className="rating__card">
                        <Link className="rating-img">
                            <img className="rating__img" src="https://ekb.topkvestov.ru/storage/app/uploads/public/5f4/61e/957/5f461e95760af679866969.jpg" alt=""/>
                        </Link>
                        <p className="rating__desc">Детективы</p>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Rating;