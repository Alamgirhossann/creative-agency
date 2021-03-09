import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { UserContext } from '../../App';
import OrderCard from '../OrderCard/OrderCard';
import LogoBar from '../Shared/LogoBar/LogoBar';
import Sidebar from '../Shared/Sidebar/Sidebar';


const Status = () => {
    const [loggedInUser] = useContext(UserContext)
    const [ordersInfo, setOrdersInfo] = useState([]);
    document.title='Your Orders'
    useEffect(() => {
        fetch('http://localhost:4000/orders?email='+loggedInUser.email, {
            method: 'GET',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                setOrdersInfo(data)
            })
    }, [])

    

    return (
        <div className="container-fluid">
            <LogoBar></LogoBar>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9" style={{ backgroundColor: "#E5E5E5", height: '100vh' }}>
                    {ordersInfo.length === 0 ? <div className='justify-content-center d-flex' style={{marginTop:"40vh"}}>
                        <Spinner animation="border"/>
                    </div>
                    :<div className="row">
                        { loggedInUser.email? ordersInfo.map(order=> <OrderCard order={order}></OrderCard>)
                        : <h1 className='mx-5 my-5'>You are currently not logged in/order any services</h1>
                        }
                    </div>}
                    
                </div>

            </div>
        </div>
    );
};

export default Status;