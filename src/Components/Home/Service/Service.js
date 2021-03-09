import React from 'react';
import { Link } from 'react-router-dom';
import { AnimationWrapper } from 'react-hover-animation';

const Service = ({ service }) => {
    return (
        <div className='col-md-4 mb-3'>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/customer/order'>
                <div className="card p-3 ">
                    <div className='card-body text-center'>
                        <AnimationWrapper>
                            <img style={{ height: "70px", borderRadius: '50%' }} src={`data:image/ong;base64,${service.image.img}`} alt="" />
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </AnimationWrapper>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default Service;