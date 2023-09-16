import React, {Fragment, useEffect} from 'react';
import SaleCard from "../../../components/SaleCard/SaleCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllSales} from "../../../redux/reducers/sale";
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Action = () => {
    const dispatch = useDispatch();

    const {data} = useSelector(store => store.sales);

    useEffect(() => {
        dispatch(getAllSales())
    },[]);

    console.log(data);

    return (
        <div className="action">
            <div className="container">
                <h2 className="title">Акции и скидки на книги</h2>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    className="mySwiper">

                    {
                        data.map((item, idx)=>(
                            <Fragment>
                                <SwiperSlide key={item.id || idx}>
                                    <SaleCard item={item}/>
                                </SwiperSlide>
                            </Fragment>
                        ))
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Action;