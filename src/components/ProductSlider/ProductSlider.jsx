import React, {useState} from "react";
import {Swiper, SwiperSlide } from "swiper/react";

import {FreeMode, Navigation, Thumbs} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


const ProductSlider = ({product}) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="product__slider">
            <img src={product.image} alt=""/>
        </div>
    );
};

export default ProductSlider;