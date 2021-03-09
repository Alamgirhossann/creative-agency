import React, { useContext } from 'react';
import { Form, Navbar } from 'react-bootstrap';
import logo from '../../images/logos/logo.png';
import googleLogo from '../../images/logos/googleLogo.png'
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './Firebase.config';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    document.title= 'Login'
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            console.log(result);
            const { displayName, email, photoURL } = result.user;
            const signedInUser = { name: displayName, email, photo: photoURL }
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });
    }

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
            <div className='form-style'>
                <Form.Group className="mt-5 pt-5" controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: '20px', fontWeight: '700' }}>Login With</Form.Label>
                    <br />
                    <button onClick={handleGoogleSignIn} style={{ backgroundColor: "#fff", width: "90%", border: "1px solid lightgray", fontWeight: "600", borderRadius: "20px" }} className="btn"> <img style={{ height: "25px" }} src={googleLogo} alt="" /> Continue with Google</button>
                    <Form.Text style={{ fontWeight: "500" }}>
                        Don't have an account? <span style={{ color: 'blueviolet' }}>create an account.</span>
                    </Form.Text>
                </Form.Group>
            </div>
        </div>


    );
};

export default Login;