import React, {useContext, useEffect , Fragment} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Card from "../Card/Card";
import {CustomContext} from "../../config/context/context";


const Hit = () => {

    const{hit, getHit} = useContext(CustomContext);

    useEffect(()=>{
        getHit()
    },[]);


    console.log(hit);

    return (
        <section className="hit">
            <div className="container">
                <h2 className="hit__title">Новинки</h2>
                    <Swiper
                        loop={true}
                        autoplay={
                            {delay: 3000}
                        }
                        speed={1500}
                        slidesPerView={5}
                        spaceBetween={30}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >

                        {
                            hit.map((item, idx)=>(
                                <Fragment key={item.id || idx}>
                                    <SwiperSlide>
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