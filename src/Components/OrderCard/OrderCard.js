import React from 'react';

const OrderCard = ({order}) => {
    return (
        <div className='col-md-4 mb-3 mt-3'>
            <div className="card p-3 ">
                <div className='card-body text-left'>
                <img style={{ height: "70px", borderRadius: '50%' }} src={`data:image/ong;base64,${order.image.img}`} alt="" />
                    <h4>{order.design}</h4>
                    <p>{order.detail}</p>
                </div>
            </div>

        </div>
    );
};

export default OrderCard;