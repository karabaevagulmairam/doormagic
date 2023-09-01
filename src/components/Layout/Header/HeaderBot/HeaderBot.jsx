import React from 'react';
import {Link} from 'react-router-dom'

const HeaderBot = () => {
    return (
        <nav className="header__bot">

            <Link to={'/about'} className="header__bot-link">
                О нас
            </Link>
            <div className="header__bot-list">

                <Link to={'/sale'} className="header__bot-link">
                    Скидки
                </Link>
                <Link to={'/rating'} className="header__bot-link">
                    Рейтинги
                </Link>
                <Link className="header__bot-link">
                    Новинки
                </Link>
                <Link to={'/authors'} className="header__bot-link">
                    Авторы
                </Link>
                <Link  to={'/cataloge'} className="header__bot-link">
                    Каталог
                </Link>

            </div>
        </nav>
    );
};

export default HeaderBot;