import React from 'react';
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar,Autoplay } from 'swiper/modules';

import c1 from '../../../assets/c1.jpg'
import c2 from '../../../assets/c2.jpg'
import c3 from '../../../assets/c3.jpg'
import c4 from '../../../assets/c4.jpg'
import c5 from '../../../assets/c5.jpg'


const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__row active">
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
                           <Link to={'/sale'}>
                               <img src={c1} alt="" className="banner__img"/>
                           </Link>
                       </SwiperSlide>
                       <SwiperSlide>
                           <Link to={'/sale'}>
                               <img src={c2} alt="" className="banner__img"/>
                           </Link>
                       </SwiperSlide>
                       <SwiperSlide>
                           <Link to={'/sale'}>
                               <img src={c3} alt="" className="banner__img"/>
                           </Link>
                       </SwiperSlide>
                       <SwiperSlide>
                           <Link to={'/sale'}>
                               <img src={c4} alt="" className="banner__img"/>
                           </Link>
                       </SwiperSlide>
                       <SwiperSlide>
                           <Link to={'/sale'}>
                               <img src={c5} alt="" className="banner__img"/>
                           </Link>
                       </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Banner;