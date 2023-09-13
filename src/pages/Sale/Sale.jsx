import React from 'react';
import Banner from "../Home/Banner/Banner";
import SaleCard from "../../components/SaleCard/SaleCard";

const Sale = () => {
    return (
        <div className="sale">
            <div className="container">
                <h1 className="sale__title">Акции и скидки на книги</h1>
                <Banner/>
                <div className="sale__row">
                    <SaleCard/>
                </div>
            </div>
        </div>
    );
};

export default Sale;