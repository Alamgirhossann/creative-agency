import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../Service/Service';
import { Spinner } from 'react-bootstrap';

const Services = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/service', {
            method: 'GET',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                setServiceData(data)
            })

    }, [])
    return (
        <div className='mx-2 mt-5'>
            <h1 className='title'>Provide Awesome <span style={{ color: "#7AB259" }}> Services</span> </h1>
            {serviceData.length === 0 ?
                <div className='justify-content-center d-flex'>
                    <Spinner animation="border" />
                </div>
                : <div>
                    <div className="row mt-5">
                        {
                            serviceData.map(service => <Service service={service}></Service>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Services;