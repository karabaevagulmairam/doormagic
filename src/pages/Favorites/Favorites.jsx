import React, {Fragment, useContext, useEffect, useState} from 'react';
import {CustomContext} from "../../config/context/context";
import {Swiper,SwiperSlide} from "swiper/react";
import Card from "../../components/Card/Card";
import { Pagination, Autoplay } from 'swiper/modules';
const Favorites = () => {

    const {favorites} = useContext(CustomContext);

    const [page, setPage] = useState(1);

    let favoritesPages = new Array(Math.ceil(favorites.length / 4)).fill(null, 0);

    useEffect(() => {
        if (page > favoritesPages.length) {
            setPage(favoritesPages.length)
        }
    }, [favoritesPages]);

    console.log(favorites);

    if (favorites.length) {
        return (
            <section className="hit">
                <div className="container">
                    <h2 className="hit__title">Избранные товары</h2>

                    {
                        page
                    }

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
                            favorites.filter((item, idx) => idx >= page * 4 - 4 && idx < page * 4).map((item)=>(
                                <Fragment key={item.id || idx}>
                                    <SwiperSlide>
                                        <Card item={item}/>
                                    </SwiperSlide>
                                </Fragment>
                            ))
                        }
                    </Swiper>

                    {
                        favoritesPages.length > 1 && <ul>
                            {
                                favoritesPages.map((item, idx) => (
                                    <li onClick={() => setPage(idx + 1)} key={idx}>{idx + 1}</li>
                                ))
                            }
                        </ul>
                    }
                </div>
            </section>
        );
    } else {
        return <h2 className="hit__title-fav">Список избранных товаров пуст</h2>
    }
};

export default Favorites;