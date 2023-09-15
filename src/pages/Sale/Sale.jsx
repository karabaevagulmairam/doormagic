import React, {Fragment} from 'react';
import Banner from "../Home/Banner/Banner";
import SaleCard from "../../components/SaleCard/SaleCard";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";
import {useGetProductsQuery} from "../../redux/api/api";

const Sale = () => {

    const {data} = useGetProductsQuery()

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