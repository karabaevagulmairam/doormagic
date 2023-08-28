import React from 'react';
import {Link} from 'react-router-dom'

const HeaderBot = () => {
    return (
        <nav className="header__bot">

            <Link className="header__bot-link">
                О нас
            </Link>

            <div className="header__bot-list">

                <Link className="header__bot-link">
                    Скидки
                </Link>
                <Link className="header__bot-link">
                    Рейтинги
                </Link>
                <Link className="header__bot-link">
                    Новинки
                </Link>
                <Link className="header__bot-link">
                    Авторы
                </Link>
                <Link className="header__bot-link">

                </Link>

            </div>
        </nav>
    );
};

export default HeaderBot;