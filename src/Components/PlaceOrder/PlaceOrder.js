import React, { useContext, useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import LogoBar from '../Shared/LogoBar/LogoBar';
import Sidebar from '../Shared/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';


const PlaceOrder = () => {
    document.title ='Order'
    const { register, errors } = useForm();    
    const [info, setInfo] = useState({});
    const [file, setFile] = useState({});
    

    const handleBlur = (e) => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('design', info.design);
        formData.append('detail', info.detail);
        formData.append('price', info.price);
        e.preventDefault()
        
        fetch('http://localhost:4000/order', {
            method: 'POST',
            body: formData, 
        
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    alert('your data submitted')
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
                <div className="col-md-9" style={{ backgroundColor: "#E5E5E5", height: '100vh' }}>
                    <Form className='mt-5' onSubmit={handleSubmit} style={{backgroundColor:"#f2eeed", height:"400px"}}>
                        <Form.Group controlId="formName">
                            <Form.Control onBlur={handleBlur}  name='name' type='text' ref={register({ required: true })} placeholder="Name/Company's name" />
                            {errors.name && <span>This field is required</span>}
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Control onBlur={handleBlur}  name='email' type='email' ref={register({ required: true })} placeholder="Email " />
                            {errors.email && <span>This field is required</span>}
                        </Form.Group>

                        <Form.Group controlId="design">
                            <Form.Control onBlur={handleBlur} name='design' type='text' ref={register({ required: true })} placeholder="Graphics Design" />
                            {errors.design && <span>This field is required</span>}
                        </Form.Group>

                        <Form.Group controlId="detail">
                            <Form.Control onBlur={handleBlur} name='detail' type='text' ref={register({ required: true })} placeholder="Project Detail" />
                            {errors.detail && <span>This field is required</span>}
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="price">
                                <Form.Control onBlur={handleBlur} name='price' type='text' ref={register({ required: true })} placeholder="Price" />
                                {errors.price && <span>This field is required</span>}
                            </Form.Group>
                            <Form.Group as={Col} controlId="picture">
                                <label htmlFor="file" style={{backgroundColor:'#DEFFED',width:'200px', height:'40px', color:'#009444', border:'1px solid #009444', borderRadius:'5px', display:'flex', justifyContent:'center',alignItems:"center"}}><FontAwesomeIcon icon={faCloudUploadAlt}/> Upload Project Image</label>
                                <Form.Control onChange={handleFileChange} id='file' style={{display:"none"}} name='image' type='file' ref={register({ required: true })} accept="image/*" />
                            </Form.Group>
                        </Form.Row>

                        <button style={{ backgroundColor: "#111430", width: "100px" }} className="btn text-white" type='submit'>Send</button>
                    </Form>
                </div>

            </div>
        </div>
    );
};

export default PlaceOrder;