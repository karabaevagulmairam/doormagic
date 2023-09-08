import React from "react";

const ProductSlider = ({product}) => {

    return (
        <div className="product__slider">
            <img src={product.image} alt=""/>
        </div>
    );
};

export default ProductSlider;