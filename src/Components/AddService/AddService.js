import React, { useState } from 'react';
import LogoBar from '../Shared/LogoBar/LogoBar';
import Sidebar from '../Shared/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const AddService = () => {
    document.title= 'Add Service'
    const [info, setInfo] = useState({})
    const [file, setFile] = useState({})

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', info.title)
        formData.append('description', info.description)
        e.preventDefault();

        fetch('http://localhost:4000/services', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Your service is added')
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    const { register, errors } = useForm();

    return (
        <div className="container-fluid">
            <LogoBar></LogoBar>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9" style={{ backgroundColor: "#E5E5E5", height: '100vh' }}>
                    <Form className='mt-5' onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="title">
                            <Form.Label>Service Title</Form.Label>
                                <Form.Control onBlur={handleBlur} name='title' type='text' ref={register({ required: true })} placeholder="title" />
                                {errors.title && <span>This field is required</span>}
                            </Form.Group>
                            <Form.Group as={Col} controlId="picture">
                            <Form.Label>Icon</Form.Label>
                                <label htmlFor="file" style={{backgroundColor:'#DEFFED',width:'170px', height:'40px', color:'#009444', border:'1px solid #009444', borderRadius:'5px', display:'flex', justifyContent:'center',alignItems:"center"}}><FontAwesomeIcon icon={faCloudUploadAlt}/>Upload Image</label>
                                <Form.Control onChange={handleFileChange} id='file' style={{display:"none"}} name='image' type='file' ref={register({ required: true })} accept="image/*" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control onBlur={handleBlur} type='text' name='description' ref={register({ required: true })} as="textarea" rows={4} placeholder="Enter your description" />
                            {errors.description && <span>This field is required</span>}
                        </Form.Group>
                        <button style={{ backgroundColor: "#111430", width: "100px" }} className="btn text-white">Send</button>
                    </Form>
                </div>

            </div>
        </div>
    );
};

export default AddService;