import React from 'react';
import Logo from "../../../assets/Logo.svg";
import {Link} from "react-router-dom";
import {FiInstagram} from "react-icons/fi"
import {FaPinterestP} from "react-icons/fa6"
import {FaTelegramPlane} from "react-icons/fa"

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <nav className="footer__nav">
                    <div className="footer__company">
                        <Link to={'/'}>
                            <img src={Logo} width={300} alt=""/>
                        </Link>
                        <div className="footer__social">
                            <a href="#" className="footer__social-link">
                                <FiInstagram/>
                            </a>
                            <a href="#" className="footer__social-link">
                               <FaPinterestP/>
                            </a>
                            <a href="#" className="footer__social-link">
                                <FaTelegramPlane/>
                            </a>
                        </div>
                    </div>
                    <ul className="footer__menu">
                        <li className="footer__item">
                            <a href="#" className="footer__link">О нас</a>
                        </li>
                        <li className="footer__item">
                            <a href="" className="footer__link">Подарочные сертификаты</a>
                        </li>
                        <li className="footer__item">
                            <Link to={'/delivery'} className="footer__link">Доставка</Link>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Оплата</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Акции</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Пользовательское соглашение</a>
                        </li>
                    </ul>
                    <ul className="footer__menu">
                        <li className="footer__item">
                            <Link to={'/register'} className="footer__link">Вход и регистрация</Link>
                        </li>
                        <li className="footer__item">
                            <Link to={'/room'} className="footer__link">Ваш личный кабинет</Link>
                        </li>
                        <li className="footer__item">
                            <a href="" className="footer__link">Программа лояльности</a>
                        </li>
                        <li className="footer__item">
                            <a href="" className="footer__link">Поддержка</a>
                        </li>
                    </ul>
                    <div className="footer__info">
                        <div className="footer__info-inside">
                            <h2 className="footer__info-title">Адрес</h2>
                            <p className="footer__link">г. Бишкек, пр. Чуй 92, ТЦ "ГУМ Чынар" 3 этаж</p>
                        </div>
                        <div className="footer__info-inside">
                            <h2 className="footer__info-title">Время работы</h2>
                            <p className="footer__link">Мы работаем ежедневно с 9:00 до 21:00</p>
                        </div>
                        <div className="footer__info-inside">
                            <h2 className="footer__info-title">Контакты</h2>
                            <a href="tel: +996 (779)-17-19-20" className="footer__link">
                                +996 (779)-17-19-20
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Footer;