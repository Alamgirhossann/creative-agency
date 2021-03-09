import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import LogoBar from '../Shared/LogoBar/LogoBar';
import Sidebar from '../Shared/Sidebar/Sidebar';


const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    document.title = 'Make Admin'
    const onSubmit = (data) => {

        fetch('http://localhost:4000/admin', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),

        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    alert('Admin Added')
                }
            })
            .catch(error => {
                console.error(error)
            })
        console.log(data)
    };

    return (
        <div className="container-fluid">
            <LogoBar></LogoBar>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9" style={{ backgroundColor: "#E5E5E5", height: '100vh' }}>
                    <Form className='mt-5' onSubmit={handleSubmit(onSubmit)}>

                        <Form.Row>
                            <Form.Group as={Col} controlId="price">
                                <Form.Control name='email' type='email' ref={register({ required: true })} placeholder="Email" />
                                {errors.email && <span>This field is required</span>}
                            </Form.Group>
                        </Form.Row>
                        <button style={{ backgroundColor: "#111430", width: "100px" }} className="btn text-white" type='submit'>Send</button>

                    </Form>
                </div>

            </div>
        </div>
    );
};

export default MakeAdmin;