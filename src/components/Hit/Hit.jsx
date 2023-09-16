import React, {useContext, useEffect , Fragment} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Card from "../Card/Card";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import {useGetProductsQuery} from "../../redux/api/api";
import {useDispatch, useSelector} from "react-redux";
import {getAllBooks} from "../../redux/reducers/books";

const Hit = () => {

    const dispatch = useDispatch()

    const {data, isLoading} = useSelector(store => store.books);

    console.log(data.filter((item) => item.year === '2023').filter((itm, idx) => idx <= 12))

    useEffect(() => {
        dispatch(getAllBooks())
    },[])


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
                            data.filter((item) => item.year === '2023').filter((itm, idx) => idx <= 12).map((item, idx)=>(
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