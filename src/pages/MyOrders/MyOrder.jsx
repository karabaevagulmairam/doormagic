import React, {useState} from 'react';
import {useSelector} from "react-redux";




const MyOrder = () => {

    const {user} = useSelector(store => store.user);
    const [orders, setOrders] = useState([]);

    console.log(user);

    return (
        <section className="myOrder">
            <div className="container">
                <div className="myOrder__top">
                    <div className="myOrder__text">
                        <p className="myOrder__desc-text">Товар</p>
                    </div>
                    <div className="myOrder__desc">
                        <p className="myOrder__desc-text">Цена</p>
                        <p className="myOrder__desc-text">Дата заказа</p>
                        <p className="myOrder__desc-text">Статус заказа</p>
                    </div>
                </div>

                <div className="myOrder__row">
                    {
                        user.orders?.map((order) => (
                            <div className="myOrder__card" key={order.date}>
                                <div className="myOrder__card-item">
                                    <img src={order.order[0].image} alt=""/>
                                    <div className="myOrder__card-info">
                                        <h3 className="myOrder__card-title">{order.order[0].title}</h3>
                                        <p className="myOrder__card-author">{order.order[0].author}</p>
                                    </div>
                                </div>
                                <p className="myOrder__card-price">
                                    {order.order[0].price} сом
                                </p>
                                <p className="myOrder__card-data">{order.date}</p>
                                <p className="myOrder__card-status">{order.status}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default MyOrder;