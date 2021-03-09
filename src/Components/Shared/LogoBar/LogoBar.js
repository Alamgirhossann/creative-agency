import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const LogoBar = () => {
    const [loggedInUser] = useContext(UserContext)
    return (
        <div className='container-fluid mt-3'>
            <div className="row">
                <div className="col-md-3">
                    <Link to="/home">
                        <img style={{height:"50px"}} src={logo} alt=""/>
                    </Link>
                </div>
                <div className="col-md-6 d-none d-md-block">
                    <h5>Order</h5>
                </div>
                <div className="col-md-3 row mt-2 ms-auto mb-1">
                    <div className="col-md-3">
                    <img style={{height:'40px', borderRadius:"50%"}} src={loggedInUser.photo} alt=""/>
                    </div>
                    <div className="col-md-1">
                        <h6>{loggedInUser.name}</h6>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default LogoBar;