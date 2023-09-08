import React, {useContext, useState} from 'react';
import {CustomContext} from "../../config/context/context";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom"

const CheckOut = () => {

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm();

    const {user, addOrder} = useContext(CustomContext);

    const [popup, setPopup] = useState(false);

    const [count, setCount] = useState(15);

    const navigate = useNavigate();

    const submitForm = (data) => {
        let order = {
            ...data,
            status: 'panding',
            order: user.carts,
            totalPrice: user.carts?.reduce((acc, rec) => acc + rec.price * rec.count, 0)
        };
        addOrder(order, setPopup, redirect)
    };

    const redirect = () => {
        setInterval(() => {
            setCount(prev => {
                if (prev < 2) {
                    navigate('/');
                    return 1
                }
                return prev - 1
            })
        }, 1000)
    };

    return (
        <section className="checkout">
            <div className="container">
                <form className="checkout__out" onSubmit={handleSubmit(submitForm)}>
                    <div className="checkout__left">
                        <div className="checkout__subs">
                            <span className="checkout__subs-num">01</span>
                            <h2 className="cart__title">Оформление заказа</h2>
                        </div>

                        <div className="checkout__delivery">
                            <div className="checkout__delivery-del">
                                <input type="radio" className="checkout__delivery-check"/>
                                <div className="checkout__delivery-box">
                                    <span className="checkout__delivery-comp">Yandex доставка</span>
                                    <span className="checkout__delivery-exp">Доставка до 5 часов</span>
                                </div>
                                <span className="checkout__delivery-comp">200с</span>
                            </div>

                            <div className="checkout__delivery-del">
                                <input type="radio" className="checkout__delivery-check"/>
                                <div className="checkout__delivery-box">
                                    <span className="checkout__delivery-comp">Доставка In-Cargo</span>
                                    <span className="checkout__delivery-exp">Доставка в регионы до 2-5 дней</span>
                                </div>
                                <span className="checkout__delivery-comp">300c</span>
                            </div>
                        </div>

                        <div className="checkout__form" >
                            <div className="checkout__subs">
                                <span className="checkout__subs-num">02</span>
                                <h2 className="cart__title">Адрес</h2>
                            </div>

                            <div className="checkout__block">
                                <div className="checkout__block-fields">
                                    <input {...register('name')} value={user.name} type="text" className="checkout__block-field" placeholder="Имя"/>
                                </div>
                                <div className="checkout__block-fields">
                                    <input {...register('surname')} value={user.surname} type="text" className="checkout__block-field" placeholder="Фамилия"/>
                                </div>
                                <div className="checkout__block-fields">
                                    <input {...register('email')} value={user.email} type="text" className="checkout__block-field" placeholder="E-mail"/>
                                </div>
                                <div className="checkout__block-fields">
                                    <input {...register('phone')} value={user.phone} type="phone" className="checkout__block-field" placeholder="Телефон"/>
                                </div>
                                <div className="checkout__block-fields">
                                    <input {...register('city')} type="text" className="checkout__block-field" placeholder="Город"/>
                                </div>
                                <div className="checkout__block-fields">
                                    <input {...register('street')} type="text" className="checkout__block-field" placeholder="Улица"/>
                                </div>
                                <div className="checkout__block-fields">
                                    <input {...register('home')} type="text" className="checkout__block-field" placeholder="Дом"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="checkout__right">
                        <div className="checkout__orders">
                            <div className="checkout__subsS">
                                <h2 className="checkout__subsS-title">Ваш заказ</h2>
                                <span className="checkout__subsS-numb">({
                                    user.carts?.reduce((acc, rec) => acc + rec.count, 0)
                                })</span>
                            </div>

                            <div className="checkout__row">
                                {
                                    user.carts?.map((item) => (
                                        <div key={item.id} className="checkout__card">
                                            <div className="checkout__card-item">
                                                <img src={item.image} className="checkout__card-img" alt=""/>
                                                <div className="checkout__card-info">
                                                    <h3 className="checkout__card-title">{item.title}</h3>
                                                    <p className="checkout__card-author">{item.author}</p>
                                                </div>
                                            </div>

                                            <p className="checkout__card-price">
                                                {item.count} /
                                                {item.price * item.count} сом
                                            </p>
                                        </div>
                                    ))
                                }

                                <div className="checkout__total">
                                    <p className="checkout__total-sub">Подитог</p>
                                    <p className="checkout__total-subtotal">{user.carts?.reduce((acc, rec) => acc + rec.price * rec.count, 0)} сом</p>
                                </div>

                                <div className="checkout__total">
                                    <p className="checkout__total-ship">Yandex доставка</p>
                                    <p className="checkout__total-shipping">300 сом</p>
                                </div>

                                <div className="checkout__total">
                                    <p className="checkout__total-total">Итог</p>
                                    <p className="checkout__total-totalSub">{user.carts?.reduce((acc, rec) => acc + rec.price * rec.count, 0)} сом</p>
                                </div>

                                <div className="checkout__pay">
                                    <h3 className="checkout__subsS-title">Способы оплаты</h3>
                                    <label className="checkout__pay-label">
                                        <input type="checkbox" className="checkout__pay-box"/>Оплата наличными
                                    </label>
                                    <button className="cart__bottom-order" type="submit">Разместить заказ</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
            {
                popup ? <div className="checkout__popup">
                    <h2 className="checkout__popup-title">Ваш заказ оформлен</h2>
                    <p className="checkout__popup-p">Через {count} секунд вас перекинет на главную страницу</p>
                    <button onClick={() => navigate('/')} className="cart__bottom-order">Перейти на главную страницу</button>
                </div> : ''
            }
        </section>
    );
};

export default CheckOut;