import React, {useContext} from 'react';
import {CustomContext} from "../../config/context/context";

const Cart = () => {

    const {user} = useContext(CustomContext);

    return (
        <section className="cart">
            <div className="container">
                <div className="cart__top">
                    <h2 className="cart__title">Корзина</h2>
                    <p className="cart__count">Удалить всё</p>
                </div>

                <div className="cart__row">
                    {
                        user.carts?.map((item) => (
                            <div className="cart__card">
                                <img src={`/${item.image}`} alt=""/>
                                <div className="cart__card-info">
                                    <h3 className="cart__card-title">{item.title}</h3>
                                    <p className="cart__card-author">{item.author}</p>
                                </div>


                                <div className="cart__card-quantity">
                                    <button className="cart__card-min">-</button>
                                    <input type="text" className="cart__card-num" min={1} max={9} />
                                    <button className="cart__card-max">+</button>
                                </div>

                                <div className="cart__card-price">{item.price}</div>

                                <button className="cart__card-deleted">X</button>
                            </div>
                        ))
                    }

                </div>

                <div className="cart__bottom">
                    <p className="cart__bottom-count">
                        Итоговая стоимость: 600 сом
                    </p>
                    <button className="cart__bottom-order">
                        Оформить заказ
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cart;