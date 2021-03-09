import React from 'react';

const FeedBackCard = ({ feedBack }) => {
    return (
        <div className='col-md-4 mb-3'>
            <div className="card p-3 ">
                <div className='card-body text-left'>
                    <div className="row">
                        <div className="col-md-4">
                            <img style={{ height: "70px", borderRadius:'50%' }} src={feedBack.photo} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h5>{feedBack.data.name}</h5>
                            <h6>{feedBack.data.designation}</h6>
                        </div>
                    </div>
                    <p>{feedBack.data.description}</p>
                </div>
            </div>

        </div>
    );
};

export default FeedBackCard;