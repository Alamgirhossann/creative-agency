import React, { useContext, useEffect, useState } from 'react';
import LogoBar from '../../Shared/LogoBar/LogoBar';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import AdminStatustable from '../AdminStatusTable/AdminStatusTable';

const AdminService = () => {
    document.title='All Orders'
    const [allOrders, setAllOrders] = useState([]);
    console.log(allOrders);
   

    useEffect(() => {
        fetch('http://localhost:4000/allOrders') 
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    

    return (
        <div className="container-fluid">
            <LogoBar></LogoBar>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9" style={{ backgroundColor: "#E5E5E5", height: '100vh' }}>                  
                    <AdminStatustable allOrders={allOrders}></AdminStatustable>
                </div>

            </div>
        </div>
    );
};

export default AdminService;