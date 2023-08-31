import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Author = () => {
    return (
        <div className="author">
            <div className="container">
                <h2 className="title">Авторы</h2>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">

                    <SwiperSlide>

                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Author;