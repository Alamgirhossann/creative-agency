import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShoppingBag, faCommentAlt, faList, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';


const Sidebar = () => {
    const [loggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [ordersInfo, setOrdersInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                setOrdersInfo(data)
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:4000/isAdmin', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    })

    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" >
            <ul className="list-unstyled">
                <li>
                    <Link to="/customer/order" style={{ color: 'black' }} >
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/customer/status" style={{ color: 'black' }}>
                        <FontAwesomeIcon icon={faShoppingBag} /> <span>Ordered List</span>
                    </Link>
                </li>
                <div style={ordersInfo.length === 0 ?{display:'none'}:{display:'block'}}>
                    <li>
                        <Link to="/customer/review" style={{ color: 'black' }}>
                            <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                        </Link>
                    </li>
                </div>
                {isAdmin && <div>
                    <li>
                        <Link to="/admin/allOrders" style={{ color: 'black' }}>
                            <FontAwesomeIcon icon={faList} /> <span>User List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/addService" style={{ color: 'black' }}>
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/makeAdmin" style={{ color: 'black' }}>
                            <FontAwesomeIcon icon={faUser} /> <span>Make Admin</span>
                        </Link>
                    </li>
                </div>}

            </ul>
        </div>
    );
};

export default Sidebar;