import React, {useContext} from 'react';
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {LiaOpencart} from   "react-icons/lia"
import {CustomContext} from "../../config/context/context";

const Card = ({item}) => {

    const {favorites, favoritesHandler} = useContext(CustomContext);

    const {addCarts, user} = useContext(CustomContext);

    const navigate = useNavigate();

    const location = useLocation();

    return (
            <div className="cards">
<<<<<<< HEAD

=======
>>>>>>> 47544f2e376df57aeebb81a94cfdcc86c65dccf2
                <div className="cards__row">
                    <div className="card">
                        <Link to={`/product/${item.id}`}>
                            <img src={location.pathname === '/' ? item.image : `${item.image}`} alt="" className="card__img"/>
                        </Link>
                        <p className="card__price">{item.price}c</p>
                        <p className="card__title">{item.title}</p>
                        <p className="card__name">{item.author}</p>
                    </div>
<<<<<<< HEAD


=======
>>>>>>> 47544f2e376df57aeebb81a94cfdcc86c65dccf2

                    <div className="card__dop">

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

                        <span className="card__fav" onClick={() => favoritesHandler(item)}>
                        {
                            favorites.some(el => el.id === item.id) ? <AiFillHeart color="red"/> : <AiOutlineHeart/>
                        }
                    </span>
                    </div>
                </div>
            </div>
    );
};

export default Card;