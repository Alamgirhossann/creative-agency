import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import LogoBar from '../Shared/LogoBar/LogoBar';
import Sidebar from '../Shared/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';

const Review = () => {
    const { register, handleSubmit, errors } = useForm();
    document.title='Feed Back'
   const [loggedInUser] = useContext(UserContext)
    const onSubmit = (data) => {
       const userInfo ={...loggedInUser, data}
        fetch('http://localhost:4000/review', {
            method: 'POST',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify(userInfo)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Your feed back is submitted')
                }
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className="container-fluid">
            <LogoBar></LogoBar>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9" style={{ backgroundColor: "#E5E5E5", height: '90vh' }}>
                    <Form className='mt-5' onSubmit={handleSubmit(onSubmit)}>

                        <Form.Group controlId="formName">
                            <Form.Control  name='name' type='text' ref={register({ required: true })} placeholder="Name" />
                            {errors.name && <span>This field is required</span>}
                        </Form.Group>

                        <Form.Group controlId="companyName">
                            <Form.Control  name='designation' ref={register({ required: true })} type="text" placeholder="Company's name Designation" />
                            {errors.designation && <span>This field is required</span>}
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control  type='text' name='description' ref={register({ required: true })} as="textarea" rows={10} />
                            {errors.description && <span>This field is required</span>}
                        </Form.Group>
                        <button style={{ backgroundColor: "#111430", width: "100px" }} className="btn text-white">Send</button>
                    </Form>
                </div>

            </div>
        </div>
    );
};

export default Review;