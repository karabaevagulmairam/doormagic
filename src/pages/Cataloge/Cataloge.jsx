import React, {Fragment, useContext, useEffect} from 'react';
import {CustomContext} from "../../config/context/context";
import Card from "../../components/Card/Card";


const Cataloge = () => {

    const{catalog, getCatalog} = useContext(CustomContext);

    useEffect(()=>{
        getCatalog()
    },[]);

    return (
        <div className="catalog">
            <div className="container">
                <div className="catalog__row">
                    {
                        catalog.map((item, idx)=>(
                            <Fragment key={item.id || idx}>
                                <Card item={item}/>
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Cataloge;