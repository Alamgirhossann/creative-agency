import React from 'react';
import { Button, Container, Form, Navbar } from 'react-bootstrap';
import logo from '../../images/logos/logo.png';
import googleLogo from '../../images/logos/googleLogo.png'
import './Login.css';

const Login = () => {
    return (
        <div>
            <Navbar className="justify-content-center" style={{ marginTop: '15px' }}>
                <Navbar.Brand to="/home">
                    <img
                        src={logo}
                        width="130"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Navbar>
            <Form className='form-style'>
                <Form.Group className="mt-5 pt-5" controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: '20px', fontWeight: '700' }}>Login With</Form.Label>
                    <br />
                    <button style={{backgroundColor:"#fff",width:"90%", border:"1px solid lightgray", fontWeight:"600",borderRadius:"20px"}} className="btn"> <img style={{height:"25px"}} src={googleLogo} alt=""/> Continue with Google</button>
                    <Form.Text style={{fontWeight:"500"}}>
                        Don't have an account? <span style={{ color: 'blueviolet' }}>create an account.</span>
                    </Form.Text>
                </Form.Group>
            </Form>
        </div>


    );
};

export default Login;