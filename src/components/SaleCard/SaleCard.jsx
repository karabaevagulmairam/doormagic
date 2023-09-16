import React, {useEffect} from 'react';
import gif from "../../assets/watch.png"
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import {getOneSale} from "../../redux/reducers/oneSale";

const   SaleCard = ({item}) => {

    const {id} = useParams();

    const dispatch = useDispatch()

    const {sale} = useSelector(store => store.sale)

    const navigate = useNavigate();

    const {user} = useSelector(store => store.user);

    useEffect(() => {
        dispatch(getOneSale(id))
    },[])

    console.log(sale)

    return (
        <div className="sale__card">
            <Link to={`/SCard/${item.id} ` }>
                <img className="sale__card-img" src={item.image} alt=""/>
            </Link>
            <div className="sale__card-info">
                <h2 className="sale__card-title">{item.title}</h2>
                <p className="sale__card-desc">{item.desc}</p>
                <p className="sale__card-time">{item.time}</p>
            </div>
            <div className="sale__card-end">
                <img className="sale__card-gif" src={gif} alt=""/>
                <p className="sale__card-subtitle">До окончания акции</p>
            </div>
            <button className="sale__card-btn" onClick={()=> {navigate(`/SCard/${item.id}`)}}>Подробнее</button>
        </div>
    );
};

export default SaleCard;