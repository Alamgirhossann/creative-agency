import React, { useEffect, useState } from 'react';
import FeedBackCard from '../FeedBackCard/FeedBackCard';
import { Spinner } from 'react-bootstrap';

const FeedBack = () => {
    const [feedBack, setFeedBack] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/feedBack', {
            method: 'GET',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                setFeedBack(data)
            })
    }, [])

    return (
        <div className='mx-2'>
            <h1 className='title'>Clients <span style={{ color: "#7AB259" }}> FeedBack</span> </h1>
            {feedBack.length === 0 ?
                <div className='justify-content-center d-flex'>
                    <Spinner animation="border" />
                </div>
                : <div>
                    <div className="row">
                        {
                            feedBack.map(feedBack => <FeedBackCard feedBack={feedBack}></FeedBackCard>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default FeedBack;