import React from 'react';
import Subscribers from './Subscribers/Subscribers';
import Partners from './Partners/Partners';
import Footer from './Footer/Footer';
import TopSlider from './topSlider/TopSlider';
import FutureItems from './FutureItems/FutureItems';

const Home = () => {
    return (
        <div>
            <TopSlider />
            <FutureItems></FutureItems>
            <Subscribers></Subscribers>
            <Partners></Partners>
            <Footer></Footer>
        </div>
    );
};

export default Home;