import React, {Fragment, useContext, useEffect, useState} from 'react';
import ACard from "../../components/ACard/ACard";
import {CustomContext} from "../../config/context/context";
import {useDispatch, useSelector} from "react-redux";
import {getAllAuthors} from "../../redux/reducers/authors.js";


const Authors = () => {

    // const{authorSlide, getAuthorSlide} = useContext(CustomContext);

    const [page, setPage] = useState(1);

    const dispatch = useDispatch()

    const {data} = useSelector(store => store.authors)


    useEffect(()=>{
        dispatch(getAllAuthors())
    },[]);


    console.log(data)


    return (
        <div className="authors">
            <div className="container">
                <h1 className="authors__title">Авторы</h1>

                <h2 className="authors__subtitle">Популярные авторы</h2>

                <div className="authors__row">
                    {
                        data.map((item, idx)=>(
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