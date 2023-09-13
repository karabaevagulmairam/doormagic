import React from 'react';
import gif from "../../assets/icon.gif"

const SaleCard = () => {
    return (
        <div className="sale__card">
            <img src="" alt=""/>
            <div className="sale__card-info">
                <h2 className="sale__card-title"></h2>
                <p className="sale__card-desc"></p>
                <p className="sale__card-time"></p>
            </div>
            <div className="sale__card-end">

                <p className="sale__card-subtitle">До окончания акции</p>
                <button className="sale__card-btn">Заказать</button>
            </div>
        </div>
    );
};

export default SaleCard;