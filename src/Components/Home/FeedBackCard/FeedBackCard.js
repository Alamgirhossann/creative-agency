import React from 'react';

const FeedBackCard = ({ feedBack }) => {
    return (
        <div className='col-md-4 mb-3'>
            <div className="card p-3 ">
                <div className='card-body text-left'>
                    <div className="row">
                        <div className="col-md-4">
                            <img style={{ height: "70px" }} src={feedBack.image} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h5>{feedBack.name}</h5>
                            <h6>{feedBack.designation}</h6>
                        </div>
                    </div>
                    <p>{feedBack.description}</p>
                </div>
            </div>

        </div>
    );
};

export default FeedBackCard;