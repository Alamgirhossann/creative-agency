import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import FeedBack from '../FeedBack/FeedBack';
import Header from '../Header/Header';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <OurWorks></OurWorks>
            <FeedBack></FeedBack>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;