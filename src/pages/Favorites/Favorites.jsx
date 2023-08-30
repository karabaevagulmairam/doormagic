import React, {Fragment, useContext} from 'react';
import {CustomContext} from "../../config/context/context";
import Card from "../../components/Card/Card";

const Favorites = () => {

    const {favorites} = useContext(CustomContext);

    console.log(favorites);

    if (favorites.length) {
        return (
            <section className="hit">
                <div className="container">
                    <h2 className="hit__title">Избранные товары</h2>
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
                            favorites.map((item, idx)=>(
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
    } else {
        return <h2 className="hit__title-fav">Список избранных товаров пуст</h2>
    }

};

export default Favorites;