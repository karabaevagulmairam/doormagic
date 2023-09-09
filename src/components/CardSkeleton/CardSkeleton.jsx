import React from 'react';
import Skeleton from 'react-loading-skeleton'
import {Link} from "react-router-dom";

const CardSkeleton = ({cards}) => {
    return (
        Array(cards).fill(0).map((item, idx) => (
            <div className="cards" key={item.id || idx}>
                <div className="cards__row">
                    <div className="card">
                        <Link>
                            <Skeleton/>
                        </Link>

                        <p className="card__price"><Skeleton/></p>
                        <p className="card__title"><Skeleton/></p>
                        <p className="card__name"><Skeleton/></p>
                    </div>

                    <div className="card__dop">
                        <button><Skeleton/></button>

                        <span className="card__fav">
                        <Skeleton/>
                    </span>
                    </div>
                </div>
            </div>
        ))
    );
};

export default CardSkeleton;