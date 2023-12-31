import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {LiaOpencart} from   "react-icons/lia"
import {useDispatch, useSelector} from "react-redux";
import {addCart, addFavorites, deleteCard} from "../../redux/reducers/user.js";

const Card = ({item}) => {

    const dispatch = useDispatch();

    const {user} = useSelector(store => store.user);

    const navigate = useNavigate();

    const location = useLocation();

    return (
            <div className="cards">

                <div className="cards__row">
                    <div className="card">
                        <Link to={`/product/${item.id}`}>
                            <img src={location.pathname === '/' ? item.image : `${item.image}`} alt="" className="card__img"/>
                        </Link>

                        <p className="card__price">{item.price}c</p>
                        <p className="card__title">{item.title}</p>
                        <p className="card__name">{item.author}</p>
                    </div>

                    <div className="card__dop">
                        {
                            user.carts?.some(el => el.id === item.id) ?
                                <button type="button" className="card__add" onClick={() => dispatch(deleteCard(item))}>ДОБАВЛЕНО</button>
                                : <button type="button" className="btn" onClick={() => {
                                    if ('id' in user){
                                        dispatch(addCart(item))
                                    } else{
                                        navigate('/login')
                                    }
                                }}>В КОРЗИНУ
                                    <span className="card__cart">
                            <LiaOpencart/>
                        </span>
                                </button>
                        }

                        <span className="card__fav" onClick={() => dispatch(addFavorites(item))}>
                        {
                            user?.favorites?.some(el => el.id === item.id) ? <AiFillHeart color="red"/> : <AiOutlineHeart/>
                        }
                    </span>
                    </div>
                </div>
            </div>
    );
};

export default Card;