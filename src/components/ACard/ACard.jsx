import React from 'react';
import {Link, useLocation} from 'react-router-dom'

const ACard = ({item}) => {

    const location = useLocation();

    const rating = item?.ratingView?.count + item?.ratingView?.point / item?.ratingView?.count

    console.log(rating)

    return (
        <div className="authors__aCard">
            <Link to={`/author/${item.id}`}>
                <img src={location.pathname === '/' ? item.image : `${item.image}`} alt="" className="authors__aCard-img"/>
            </Link>

            <div className="authors__aCard-info">
                <h3 className="authors__aCard-title">{item.name}</h3>
                <p className="authors__aCard-book">{Math.round(rating)} книг</p>
            </div>
        </div>
    );
};

export default ACard;