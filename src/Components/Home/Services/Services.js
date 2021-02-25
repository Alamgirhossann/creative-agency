import React from 'react';
import './Services.css'
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import Service from '../Service/Service';

const serviceData = [
    {
        id: 1,
        image: service1,
        title: 'Web & Mobile Design',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus sunt id eos aliquid doloribus."
    },
    {
        id: 1,
        image: service2,
        title: 'Graphic Design',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus sunt id eos aliquid doloribus."
    },
    {
        id: 1,
        image: service3,
        title: 'Web Development',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus sunt id eos aliquid doloribus."
    }
]

const Services = () => {
    return (
        <div className='mx-2 mt-5'>
            <h1 className='title'>Provide Awesome <span style={{ color: "#7AB259" }}> Services</span> </h1>
            <div className="row mt-5">
                {
                    serviceData.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;