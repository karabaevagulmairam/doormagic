import React, {useContext} from 'react';
import {CustomContext} from "../../config/context/context";

const Cart = () => {

    const {user, removeCartsCountMinus, addCartsCountPlus} = useContext(CustomContext);

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
                                <div className="cart__card-item">
                                    <img src={item.image}/*{`/${item.image}`}*/ alt=""/>
                                    <div className="cart__card-info">
                                        <h3 className="cart__card-title">{item.title}</h3>
                                        <p className="cart__card-author">{item.author}</p>
                                    </div>
                                </div>

                                <div className="cart__card-quantity">
                                    <button className="cart__card-min" type="button" onClick={() => removeCartsCountMinus(item.id)}>-</button>
                                    <span className="cart__card-num">
                                        {
                                            user.carts.find(el => el.id === item.id).count
                                        }
                                    </span>
                                    <button className="cart__card-max" type="button" onClick={() => addCartsCountPlus(item.id)}>+</button>
                                </div>

                                <p className="cart__card-price">
                                    {item.price} сом
                                    <br/>
                                    {
                                        item.price * item.count
                                    } сом
                                </p>

                                <button className="cart__card-deleted">X</button>
                            </div>
                        ))
                    }

                </div>

                <div className="cart__bottom">
                    <p className="cart__bottom-count">
                        Итоговая стоимость: {user.carts?.reduce((acc, rec) => acc + rec.price * rec.count, 0)} сом
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