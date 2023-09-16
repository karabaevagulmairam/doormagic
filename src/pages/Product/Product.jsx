import React, {useEffect, useState} from 'react';
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import {useParams} from "react-router-dom"
import api from "../../config/api/api";
import Hit from "../../components/Hit/Hit";
import {useDispatch, useSelector} from "react-redux";
import {getOneBook} from "../../redux/reducers/oneBook";



const Product = () => {

    const params = useParams();
    const dispatch = useDispatch()

    const {product} = useSelector(store => store.book)

    useEffect(() => {
        dispatch(getOneBook(params.id))
    },[params.id])

    console.log(product)



        return (
            <>
                <section className="product">
                    <div className="container">
                        <div className="product__row">
                            <ProductSlider product={product}/>
                            <ProductInfo product={product}/>
                        </div>


                        <h2 className="product__info-titleDesc">Описание книги</h2>
                        <p className="product__info-desc">
                            {product.description}
                        </p>
                    </div>
                </section>
                <Hit/>
            </>

        );

};

export default Product;