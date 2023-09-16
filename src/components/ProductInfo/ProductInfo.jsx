
import {Link, useNavigate} from 'react-router-dom';
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {LiaOpencart} from   "react-icons/lia"
import {useDispatch, useSelector} from "react-redux";
import {addCart, addFavorites} from "../../redux/reducers/user.js";

const ProductInfo = ({product}) => {





    const dispatch = useDispatch()
    const {user} = useSelector(store => store.user)

    const navigate = useNavigate();

    return (
        <div className="product__info">
                <div className="product__info-info">
                    <h2 className="product__info-title">
                        {product.title}
                    </h2>

                    <Link to={`/`} className="product__info-author">
                        {product.author} (Автор)
                    </Link>

                    <div className="product__info-smell">
                        <h3 className="product__info-char">Характеристики</h3>

                        <ul className="product__info-ul">
                            <li className="product__info-li">Издательство:................................. <span className="product__info-span">{product.public}</span></li>
                            <li className="product__info-li">Жанр:.................................................... <span className="product__info-span">{product.category}</span></li>
                            <li className="product__info-li">Переплет:.......................................... <span className="product__info-span">{product.book}</span></li>
                            <li className="product__info-li">Возрастное ограничение:...... <span className="product__info-span">{product.limit}</span></li>
                        </ul>
                    </div>

                    <div className="product__info-btns">
                        <p className="product__info-price">{product.price} сом</p>
                        <div className="product__info-prod">
                            {
                                user.carts?.some(el => el.id === product.id) ?
                                    <button type="button" className="product__info-btn">ДОБАВЛЕНО
                                        <span className="card__cart"><LiaOpencart size={22}/></span>
                                    </button>
                                    : <button type="button" className="cart__bottom-order" onClick={() => {
                                        if ('id' in user){
                                            dispatch(addCart(product))
                                        } else{
                                            navigate('/login')
                                        }
                                    }}>В КОРЗИНУ
                                        <span className="card__cart"><LiaOpencart size={17}/></span>
                                    </button>
                            }
                            <button className="cart__bottom-order product__info-fav" type='submit' onClick={() => dispatch(addFavorites(product))}>
                                {
                                    user.favorites.some(el => el.id === product.id) ? <AiFillHeart size={20} color="red"/> : <AiOutlineHeart size={20}/>
                                } В ИЗБРАННОЕ
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ProductInfo;