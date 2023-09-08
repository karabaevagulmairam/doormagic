import React from 'react';
import pay from "../../assets/pay.gif"
import delivery from "../../assets/delivery.gif"

const Delivery = () => {
    return (
        <section className="delivery">
            <div className="container">
                <div className="delivery__del">
                    <div className="delivery__del-img">
                        <img src={delivery} className="delivery__del-delImg" alt=""/>
                    </div>
                    <div className="delivery__del-info">
                        <h2 className="delivery__del-title">Доставка и оплата</h2>
                        <p className="delivery__del-desc">
                            Для наших покупателей доступны 2 способа доставки: <span className="delivery__del-span">курьерская доставка</span> по городу Бишкек и регионам и <span className="delivery__del-span">самовывоз</span>.
                        </p>
                        <h3 className="delivery__del-span">Курьерска доставка:</h3> <br/>
                        <p className="delivery__del-desc">
                            Курьеры работают каждый день с 11 до 21 часа.  Доставка книг осуществляется по городу Бишкек и регионам. <br/><br/>
                            Доставка в регионы осуществляется курьерской службой In-Cargo <br/><br/>
                            Если Вы готовы принять заказ в интервале с 12 до 17 часов  или с 17 до 21 часа, то доставка будет стоить 200 сом по городу Бишкек. <br/><br/>
                            При заказе от 3000 cом доставка БЕСПЛАТНАЯ. <br/><br/>
                            При оформлении заказа до 15 часов возможна доставка  в тот же день в промежутке с 17 до 21 часа. <br/><br/>
                            Курьер предупредит Вас о своём прибытии за 30-40 минут.
                        </p>
                    </div>
                </div>

                <div className="delivery__pickup">
                    <div className="delivery__del-info">
                        <h3 className="delivery__del-span">Самовывоз</h3> <br/>
                        <p className="delivery__del-desc">
                            Вы можете сделать заказ и забрать его самостоятельно из нашего магазина по адресу: пр. Чуй 92, ТЦ "ГУМ Чынар" 3 этаж <br/><br/>
                            Заказ можете забрать на следующий день из нашего магазина в любое удобное время в промежутке с 10 до 21 часов. <br/><br/>
                            Оплатить заказ банковской картой можно заранее при оформлении. Непосредственно при получении банковской картой расплатиться нельзя.
                        </p>
                        <h3 className="delivery__del-span">Оплата</h3> <br/>
                        <p className="delivery__del-desc">
                            Вы можете оплатить заказ при получении наличными или заранее оплатить заказ банковской картой.  Для этого укажите выбранный способ при оформлении заказа.
                        </p>
                    </div>
                    <div className="delivery__pickup-img">
                        <img src={pay} className="delivery__pickup-pick" alt=""/>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Delivery;