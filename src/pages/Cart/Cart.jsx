
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addCount, deleteCard, deleteCount} from "../../redux/reducers/user.js";

const Cart = () => {



    const dispatch = useDispatch()

    const {user} = useSelector(store => store.user)

    return (
        <section className="cart">
            <div className="container">
                <div className="cart__top">
                    <h2 className="cart__title">Корзина</h2>
                    <p className="cart__count">
                        {
                            user.carts?.reduce((acc, rec) => acc + rec.count, 0)
                        } товара
                    </p>
                </div>

                <div className="cart__row">
                    {
                        user.carts?.map((item) => (
                            <div className="cart__card">
                                <div className="cart__card-item">
                                    <img src={item.image}/*{`/${item.image}`}*/ alt=""/>
                                    <div className="cart__card-info">
                                        <h3 className="cart__card-title">{item.title}</h3>
                                        <p className="cart__card-author">{item.author}</p>
                                    </div>
                                </div>

                                <div className="cart__card-quantity">
                                    <button className="cart__card-min" type="button" onClick={() => dispatch(deleteCount(item))}>-</button>
                                    <span className="cart__card-num">
                                        {
                                            user.carts.find(el => el.id === item.id).count
                                        }
                                    </span>
                                    <button className="cart__card-max" type="button" onClick={() => dispatch(addCount(item))}>+</button>
                                </div>

                                <p className="cart__card-price">
                                    {
                                        item.price * item.count
                                    } сом
                                </p>

                                <button className="cart__card-deleted" type="button" onClick={() => dispatch(deleteCard(item))}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 31 30" fill="none">
                                        <path d="M18.3053 15L29.5226 3.7822C29.8312 3.4734 30.0015 3.06142 30.0019 2.62212C30.0019 2.18258 29.8317 1.77012 29.5226 1.4618L28.5397 0.479056C28.2306 0.169523 27.8186 0 27.3789 0C26.9398 0 26.5278 0.169523 26.2188 0.479056L15.0015 11.6961L3.78366 0.479056C3.4751 0.169523 3.06288 0 2.62334 0C2.18429 0 1.77207 0.169523 1.46351 0.479056L0.480031 1.4618C-0.16001 2.10184 -0.16001 3.14289 0.480031 3.7822L11.6976 15L0.480031 26.2173C0.171231 26.5266 0.00121959 26.9386 0.00121959 27.3779C0.00121959 27.8172 0.171231 28.2292 0.480031 28.5382L1.46327 29.5209C1.77182 29.8302 2.18429 30 2.6231 30C3.06264 30 3.47486 29.8302 3.78342 29.5209L15.0012 18.3036L26.2185 29.5209C26.5276 29.8302 26.9396 30 27.3786 30H27.3791C27.8184 30 28.2304 29.8302 28.5394 29.5209L29.5224 28.5382C29.831 28.2294 30.0012 27.8172 30.0012 27.3779C30.0012 26.9386 29.831 26.5266 29.5224 26.2176L18.3053 15Z" fill="#525252"/>
                                    </svg>
                                </button>
                            </div>
                        ))
                    }

                </div>

                {
                    user.carts?.length ? <div className="cart__bottom">
                        <p className="cart__bottom-count">
                            Итоговая стоимость: {user.carts?.reduce((acc, rec) => acc + rec.price * rec.count, 0)} сом
                        </p>
                        <Link to={'/checkout'}>
                            <button className="cart__bottom-order">
                                Оформить заказ
                            </button>
                        </Link>
                    </div> : ''
                }
                {/*<img src="https://tedacar.cc/static/store/img/empty_cart.f1a74451e1af.jpg" alt=""/>*/}
            </div>
        </section>
    );
};

export default Cart;