import React from 'react';
import Header from '../components/header/Header';
import Carousel from '../components/Slider/Carousel';
import Pizza from '../components/HotSale/components/Pizza'
import Sushi from '../components/HotSale/components/Sushi'
import TrangMieng from '../components/HotSale/components/TrangMieng';
import Footer from '../components/footer/Footer'
import AppChat from '../components/AppChat/AppChat'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { useSelector } from 'react-redux';

function HomePage(props) {
    const {userInfo} = useSelector(state => state.userSignin)
    
    return (
        <div style={{position: 'relative'}}>
            <Header></Header>
            <Carousel></Carousel>
            <Pizza></Pizza> 
            <Sushi></Sushi>
            <TrangMieng></TrangMieng>
            <Footer></Footer>
            <ScrollToTop></ScrollToTop>
            {
               userInfo && userInfo.isAdmin === false ? (<AppChat></AppChat>) : ""
            }
        </div>
    );
}

export default HomePage;