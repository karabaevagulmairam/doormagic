import React, {Fragment, useEffect} from 'react';
import Banner from "../Home/Banner/Banner";
import SaleCard from "../../components/SaleCard/SaleCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllSales} from "../../redux/reducers/sale";

const Sale = () => {

    const dispatch = useDispatch();

    const {data} = useSelector(store => store.sales);

    useEffect(() => {
        dispatch(getAllSales())
    },[]);

    console.log(data);

    return (
        <div className="sale">
            <h1 className="sale__title">Акции и скидки на книги</h1>
            <div className="container__small">
                <Banner/>
                <div className="sale__row">
                    {
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