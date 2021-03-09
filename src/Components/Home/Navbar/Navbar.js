import React from 'react';
import './Navbar.css';
import logo from '../../../images/logos/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img style={{ height: '50px' }} src={logo} alt="" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item me-5">
                            <a class="nav-link active underline" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link underline" href="#">Our Portfolio</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link underline" href="#">Our Team</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link underline" href="#">Contact Us</a>
                        </li>
                        <li style={{backgroundColor:"#111430",borderRadius:'5px',width:"100px"}} class="nav-item me-5">
                            <Link class="nav-link text-white text-center" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;