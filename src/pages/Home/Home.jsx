import React from 'react';
import Banner from "./Banner/Banner";
import Hit from "../../components/Hit/Hit";
import AuthorSlide from "../../components/AuthorSlide/AuthorSlide";
import Author from "../Author/Author";

const Home = () => {
    return (
        <main>
            <Banner/>
            <Hit/>
            <AuthorSlide/>
        </main>
    );
};

export default Home;