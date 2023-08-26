import React from 'react';
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderCenter from "./HeaderCenter/HeaderCenter";
import {useLocation} from "react-router-dom"
import HeaderBot from "./HeaderBot/HeaderBot";

const Header = () => {

    const location = useLocation();

    return (
        <header className="header">

            {
                location.pathname === '/' ? <HeaderTop/> : ''
            }

            <div className="container">
                <HeaderCenter/>
                <HeaderBot/>
            </div>
        </header>
    );
};

export default Header;