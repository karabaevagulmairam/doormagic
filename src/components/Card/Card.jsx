import React, {useContext} from 'react';
import {AiOutlineHeart} from "react-icons/ai";
import {Link, useNavigate} from 'react-router-dom'
import {LiaOpencart} from   "react-icons/lia"
import {CustomContext} from "../../config/context/context";

const Card = ({item}) => {

    const {addCarts, user} = useContext(CustomContext);

    const navigate = useNavigate();


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

                    {
                        user.carts?.some(el => el.id === item.id) ?
                            <button type="button" className="card__add">ДОБАВЛЕНО</button>
                            : <button type="button" className="card__btn" onClick={() => {
                                if ('id' in user){
                                    addCarts(item)
                                } else{
                                    navigate('/login')
                                }
                            }}>В КОРЗИНУ
                                <span className="card__cart">
                            <LiaOpencart/>
                        </span>
                            </button>
                    }

                    <span className="card__fav">
                        <AiOutlineHeart/>
                    </span>
                </div>
            </div>
    );
};

export default Card;