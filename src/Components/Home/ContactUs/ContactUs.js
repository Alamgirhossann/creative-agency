import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div style={{ backgroundColor: "#FBD062", height: 'auto' }} className="row mt-5">
            <div className="col-md-4 offset-md-1 mt-5">
                <h1 style={{ fontWeight: '700'}} className='px-4'>Let us buldle your <br/> project, professionally</h1>
                <p className='text-secondary px-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>

            </div>
            <div className="col-md-6 mt-5 px-4">
                <Form>
                    <Form.Group controlId="formEmail">
                        <Form.Control type="email" placeholder="Enter Your Email" />
                    </Form.Group>

                    <Form.Group controlId="formName">
                        <Form.Control type="text" placeholder="Your name/Company name" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={10} />
                    </Form.Group>
                    <button style={{backgroundColor:"#111430",width:"100px"}} className="btn text-white">Send</button>
                </Form>
            </div>
            <p style={{marginTop:"100px"}} className='text-center text-secondary'>copyright orange lab {new Date().getFullYear()}</p>
        </div>
    );
};

export default ContactUs;