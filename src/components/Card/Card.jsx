import React from 'react';
import {AiOutlineHeart} from "react-icons/ai";
import {Link , useLocation} from 'react-router-dom'
import {LiaOpencart} from   "react-icons/lia"

const Card = ({item}) => {

    const location = useLocation()

    return (
            <div className="cards">

                <div className="card">
                    <Link to={`/product/${item.id}`}>
                        <img src={location.pathname === "/" ? item.image : `../${item.image}`} alt="" className="card__img"/>
                    </Link>
                    <p className="card__price">{item.price}c</p>
                    <p className="card__title">{item.title}</p>
                    <p className="card__name">{item.author}</p>
                </div>

                <div className="dop">
                    <button className="card__btn">
                        В КОРЗИНУ
                        <span className="card__cart">
                        <LiaOpencart/>
                    </span>
                    </button>
                    <span className="card__fav">
                    <AiOutlineHeart/>
                </span>
                </div>
            </div>
    );
};

export default Card;