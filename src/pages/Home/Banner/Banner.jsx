import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar,Autoplay } from 'swiper/modules';

import b1 from '../../../assets/b1.jpg'
import b2 from '../../../assets/b2.jpg'
import b3 from '../../../assets/b3.jpg'
import b4 from '../../../assets/b4.jpg'
import b5 from '../../../assets/b5.jpg'


const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <Swiper
                    loop={true}
                    autoplay={
                        {delay: 3000}
                    }
                    speed={1500}
                    scrollbar={{
                        hide: true,
                    }}
                    modules={[Scrollbar, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <a href="" className="banner__item">
                            <img src={b1} alt="" className="banner__img"/>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="" className="banner__item">
                            <img src={b2} alt="" className="banner__img"/>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="" className="banner__item">
                            <img src={b3} alt="" className="banner__img"/>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="" className="banner__item">
                            <img src={b4} alt="" className="banner__img"/>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="" className="banner__item">
                            <img src={b5} alt="" className="banner__img"/>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Banner;