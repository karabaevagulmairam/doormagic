import React, {Fragment, useEffect, useState} from 'react';
import {Swiper,SwiperSlide} from "swiper/react";
import Card from "../../components/Card/Card";
import { Pagination, Autoplay } from 'swiper/modules';
import book from "../../assets/book.png"
import {useSelector} from "react-redux";


const Favorites = () => {


    const {user} = useSelector(store => store.user)
    const [page, setPage] = useState(1);

    let favoritesPages = new Array(Math.ceil(user.favorites.length / 4)).fill(null, 0);

    console.log(favoritesPages);

    useEffect(() => {
        if (page > favoritesPages.length) {
            setPage(favoritesPages.length)
        }
    }, [favoritesPages]);


    if (user.favorites.length) {
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
                            user.favorites
                                .filter((item, idx) => idx >= page * 4 - 4 && idx < page * 4).map((item)=>(

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
        return (
            <section className="hit__title-section">
                <div className="hit__title-img">
                    <img src={book} alt=""/>
                </div>
                <h2 className="hit__title-fav">Ваш список избранных товаров пуст</h2>
            </section>
        )
    }
};

export default Favorites;