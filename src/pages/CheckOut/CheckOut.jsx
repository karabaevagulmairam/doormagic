import React from 'react';

const CheckOut = () => {
    return (
        <section className="checkout">
            <div className="container">
                <div className="checkout__left">
                    <div className="checkout__subs">
                        <span className="checkout__subs-num">01</span>
                        <h2 className="cart__title">Оформление заказа</h2>
                    </div>

                    <div className="checkout__delivery">
                        <div className="checkout__delivery-del">
                            <input type="radio" className="checkout__delivery-check"/>
                            <div className="checkout__delivery-box">
                                <span className="checkout__delivery-comp">DHL Parsel Service</span>
                                <span className="checkout__delivery-exp">Экспресс доставка до 48 часов</span>
                            </div>
                            <span className="checkout__delivery-comp">$19.99</span>
                        </div>

                        <div className="checkout__delivery-del">
                            <input type="radio" className="checkout__delivery-check"/>
                            <div className="checkout__delivery-box">
                                <span className="checkout__delivery-comp">FedEx Доставка</span>
                                <span className="checkout__delivery-exp">Доставка до 2-4 недель</span>
                            </div>
                            <span className="checkout__delivery-comp">$4.99</span>
                        </div>
                    </div>

                    <form action="" className="checkout__form">
                        <div className="checkout__subs">
                            <span className="checkout__subs-num">02</span>
                            <h2 className="cart__title">Адрес</h2>
                        </div>

                        <div className="checkout__block">
                            <div className="checkout__block-fields">
                                <input type="text" className="checkout__block-field" placeholder="Имя"/>
                            </div>
                            <div className="checkout__block-fields">
                                <input type="text" className="checkout__block-field" placeholder="Фамилия"/>
                            </div>
                            <div className="checkout__block-fields">
                                <input type="text" className="checkout__block-field" placeholder="E-mail"/>
                            </div>
                            <div className="checkout__block-fields">
                                <input type="phone" className="checkout__block-field" placeholder="Телефон"/>
                            </div>
                            <div className="checkout__block-fields">
                                <input type="text" className="checkout__block-field" placeholder="Адрес"/>
                            </div>
                            <div className="checkout__block-fields">
                                <input type="text" className="checkout__block-field" placeholder="Город"/>
                            </div>
                            <div className="checkout__block-fields">
                                <input type="text" className="checkout__block-field" placeholder="Страна"/>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="checkout__right"></div>
            </div>
        </section>
    );
};

export default CheckOut;