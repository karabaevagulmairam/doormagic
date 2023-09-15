import React, {Fragment, useEffect} from 'react';
import Banner from "../Home/Banner/Banner";
import SaleCard from "../../components/SaleCard/SaleCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllSales} from "../../redux/reducers/sale";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";
import Card from "../../components/Card/Card";

const Sale = () => {

    const dispatch = useDispatch()

    const {data, isLoading} = useSelector(store => store.sales)

    useEffect(() => {
        dispatch(getAllSales())
    },[])

    console.log(data)

    return (
        <div className="sale">
            <h1 className="sale__title">Акции и скидки на книги</h1>
            <div className="container__small">
                <Banner/>
                <div className="sale__row">
                    {
                        isLoading ? <CardSkeleton cards={12}/> :
                            data.map((item, idx)=>(
                                <Fragment key={item.id || idx}>
                                    <SaleCard item={item}/>
                                </Fragment>
                            ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Sale;