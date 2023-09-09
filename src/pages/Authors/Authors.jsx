import React, {Fragment, useContext, useEffect} from 'react';
import ACard from "../../components/ACard/ACard";
import Card from "../../components/Card/Card";
import {CustomContext} from "../../config/context/context";

const Authors = () => {

    const{authorSlide, getAuthorSlide} = useContext(CustomContext);

    useEffect(()=>{
        getAuthorSlide()
    },[]);

    return (
        <div className="authors">
            <div className="container">
                <h1 className="authors__title">Авторы</h1>

                <h2 className="authors__subtitle">Популярные авторы</h2>

                <div className="authors__row">
                    {
                        authorSlide.map((item, idx)=>(
                            <Fragment key={item.id || idx}>
                                <ACard item={item}/>
                            </Fragment>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Authors;