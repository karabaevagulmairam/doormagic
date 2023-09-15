import React, {useEffect} from 'react';
import gif from "../../assets/icon.gif"
import b1 from '../../assets/b1.jpg'
import b2 from '../../assets/b2.jpg'
import b3 from '../../assets/b3.jpg'
import b4 from '../../assets/b4.jpg'
import b5 from '../../assets/b5.jpg'
import {useDispatch, useSelector} from "react-redux";
import {getAllSales} from "../../redux/reducers/sale";

const   SaleCard = () => {

    const dispatch = useDispatch()

    const {data} = useSelector(store => store.sales)

    useEffect(() => {
        dispatch(getAllSales())
    },[])

    console.log(data)

    return (
        <div className="sale__card">
            <img className="sale__card-img" src={data.image} alt=""/>
            <div className="sale__card-info">
                <h2 className="sale__card-title"></h2>
                <p className="sale__card-desc"></p>
                <p className="sale__card-time"></p>
            </div>
            <div className="sale__card-end">
                <img className="sale__card-gif" src={gif} alt=""/>
                <p className="sale__card-subtitle">До окончания акции</p>
                <button className="sale__card-btn">Заказать</button>
            </div>
        </div>
    );
};

export default SaleCard;