import React from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png'
import FeedBackCard from '../FeedBackCard/FeedBackCard';

const feedBackData = [
    {
        id: 1,
        image: customer1,
        name: 'Nash Patrik',
        designation:'CEO,Manpol',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus sunt id eos aliquid doloribus."
    },
    {
        id: 1,
        image: customer2,
        designation:'CEO,Manpol',
        name: 'Mariam Barron',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus sunt id eos aliquid doloribus."
    },
    {
        id: 1,
        image: customer3,
        designation:'CEO,Manpol',
        name: 'Bria Malone',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus sunt id eos aliquid doloribus."
    }
]

const FeedBack = () => {
    return (
        <div className='mx-2'>
            <h1 className='title'>Clients <span style={{ color: "#7AB259" }}> FeedBack</span> </h1>
            <div className="row">
                {
                    feedBackData.map(feedBack => <FeedBackCard feedBack={feedBack}></FeedBackCard>)
                }
            </div>
        </div>
    );
};

export default FeedBack;