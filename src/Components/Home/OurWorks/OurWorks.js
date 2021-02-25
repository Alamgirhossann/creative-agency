import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './OurWorks.css'
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';


const OurWorks = () => {
    return (
        <div style={{ backgroundColor: "#111430", marginTop:'80px', height:"650px"}}>
            <h1 className='text-white text-center head'>Hare are Some of <span style={{ color: "#7AB259" }}>Our Works</span></h1>
            <div className='slide'>
                <Slide easing="ease">
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${carousel1})` }}>
                            
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${carousel2})` }}>
                            
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${carousel3})` }}>
                            
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default OurWorks;