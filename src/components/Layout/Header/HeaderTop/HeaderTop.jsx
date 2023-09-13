import React from "react";
import {Link} from "react-router-dom"
//media
import {MdEmail} from "react-icons/md"
import {FiPhone} from "react-icons/fi"
import {RiWhatsappFill} from "react-icons/ri"
import {TbTruckDelivery} from "react-icons/tb"

const HeaderTop = () => {
    return (
        <div className="header__top">
            <div className="container">
                <nav className="header__top-nav">
                    <div className="header__top-contact">
                        <a href="#" className="header__top-link">
                            <span>
                                <MdEmail/>
                            </span>
                            support@deepmag.ru
                        </a>
                        <a href="tel: +996 (779)-17-19-20" className="header__top-link">
                            <span>
                                <FiPhone/>
                            </span>
                            +996 (779)-17-19-20
                        </a>
                        <a href="tel: +996 (779)-17-19-20" className="header__top-link">
                            <span>
                                <RiWhatsappFill/>
                            </span>
                            Напишите нам в WhatsApp
                        </a>

                    </div>
                    <div className="header__top-delivery">

                        <Link to="/delivery" className="header__top-link">
                            <span>
                                <TbTruckDelivery/>
                            </span>
                            Доставка
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default HeaderTop;