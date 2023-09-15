import React from 'react';
import {useContext} from "react";
import {CustomContext} from "../../config/context/context";
import {useSelector} from "react-redux";

const Room = (item) => {

    // const {user} = useContext(CustomContext);

    const {user} = useSelector(store => store.user)

    console.log(user)

    return (
        <section className='room'>
            <div className="container">
                <div className="room__row">
                    <form action="" className="room__form">
                        <h2 className="room__form-title">Личный кабинет</h2>
                        <div className="room__form-top">
                            <label className="room__form-label">
                                Имя
                                <input value={user.name} type="text" placeholder="Введите имя"/>
                            </label>
                            <label className="room__form-label">
                                Фамилия
                                <input value={user.surname} type="text" placeholder="Введите фамилию"/>
                            </label>
                            <label className="room__form-label">
                                Email
                                <input value={user.email} type="email" placeholder="Введите Email"/>
                            </label>
                            <label className="room__form-label">
                                Номер телефона
                                <input value={user.phone} type="tel" placeholder="Введите номер телефона"/>
                            </label>
                        </div>

                        <div className="room__form-address room__form-top">
                            <label className="room__form-label">
                                Город
                                <input value={user.city} type="text" placeholder="Введите ваш город"/>
                            </label>
                            <label className="room__form-label room__form-label_street">
                                Улица
                                <input value={user.street} type="text" placeholder="Введите улицу"/>
                            </label>
                            <label className="room__form-label">
                                Дом/Корпус
                                <input value={user.home} type="text" placeholder="Введите номер дома"/>
                            </label>
                        </div>

                        {/*<button className="room__form-btn cart__bottom-order">Изменить</button>*/}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Room;