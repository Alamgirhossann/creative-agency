import React from 'react';

const Service = ({ service }) => {
    return (
        <div className='col-md-4 mb-3'>
            <div className="card p-3 ">
                <div className='card-body text-center'>
                    <img style={{ height: "70px" }} src={service.image} alt="" />
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                </div>
            </div>

        </div>
    );
};

export default Service;