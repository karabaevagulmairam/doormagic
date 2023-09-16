import React from 'react';
import Banner from "./Banner/Banner";
import Hit from "../../components/Hit/Hit";
import AuthorSlide from "../../components/AuthorSlide/AuthorSlide";
import Action from "./Action/Action";

const Home = () => {
    return (
        <main>
            <Banner/>
            <Hit/>
            <AuthorSlide/>
            <Action/>
        </main>
    );
};

export default Home;