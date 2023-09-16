import React, {Fragment, useContext, useEffect} from 'react';

import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Link} from "react-router-dom";
import {useGetAuthorsQuery} from "../../redux/api/api.js";
import SaleCard from "../SaleCard/SaleCard";



const AuthorSlide = () => {



    const {data} = useGetAuthorsQuery({_limit: 12})




    return (
        <div className="authorSlide">
            <div className="container">
                <h2 className="title authorSlide__titles">Авторы</h2>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    className="mySwiper">

                        {
                            data?.map((item, idx)=>(
                                <Fragment>
                                    <SwiperSlide key={item.id || idx}>
                                        <div className="authorSlide__card">
                                            <Link to={`/author/${item.id}`}>
                                                <img src={location.pathname === '/' ? item.image : `${item.image}`} alt="" className="authorSlide__img"/>
                                            </Link>
                                            <p className="authorSlide__title">{item.name}</p>
                                        </div>
                                    </SwiperSlide>
                                </Fragment>
                            ))
                        }
                </Swiper>
            </div>
        </div>
    );
};

export default AuthorSlide;



