import React from 'react';
import '../scss/Home.scss'
import Footer from './Footer';
import Header from './Header';
import HomeBandStory from './homePage/HomeBandStory';
import HomeBanner from './homePage/HomeBanner';
import HomeBestProduct from './homePage/HomeBestProduct';
import HomeHappenedissue from './homePage/HomeHappenedissue';
import HomeIntroduction from './homePage/HomeIntroduction';
import HomeProducts from './homePage/HomeProducts';
import HomeVideo from './homePage/HomeVideo';
function Home(props) {
    return (
        <>
            <Header />
            <HomeBanner />
            <HomeIntroduction />
            <HomeBestProduct />
            <HomeProducts />
            <HomeBandStory />
            <HomeHappenedissue />
            <HomeVideo />
            <Footer />
        </>
    );
}

export default Home;