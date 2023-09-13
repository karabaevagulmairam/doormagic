import React, {useContext, useEffect , Fragment} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Card from "../Card/Card";
import {CustomContext} from "../../config/context/context";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import {useDispatch, useSelector} from "react-redux";
import {getAllBooks} from "../../redux/reducers/books";
import {instance} from "../../config/api/api";
import {useGetProductsQuery} from "../../redux/api/api";

const Hit = () => {

    // const {hit, getHit, isLoading} = useContext(CustomContext);
    //
    // useEffect(()=>{
    //     getHit()
    // },[]);



    const {data, isLoading} = useGetProductsQuery({_limit: 12})

    // useEffect(() => {
    //     dispatch(getAllBooks())
    // },[])







    return (
        <section className="hit">
            <div className="container">
                <h2 className="title">Новинки</h2>
                    <Swiper
                        loop={true}
                        autoplay={
                            {delay: 3000}
                        }
                        speed={1500}
                        slidesPerView={5}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >

                        {
                            isLoading ? <CardSkeleton cards={12}/> :
                            data.map((item, idx)=>(
                                <Fragment >
                                    <SwiperSlide key={item.id || idx}>
                                        <Card item={item}/>
                                    </SwiperSlide>
                                </Fragment>
                            ))
                        }
                    </Swiper>
            </div>
        </section>
    );
};

export default Hit;