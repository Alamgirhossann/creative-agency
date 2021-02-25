import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'

const Companys = () => {
    const imgStyle={
        height:'50px',
        alignItems:'center'
    }
    return (
        <section className=' container-fluid bg-white d-flex justify-content-between'>
            <div className="row mx-3">
                <div className="col me-5 mb-3">
                    <img style={imgStyle} src={slack} alt="" />
                </div>
                <div className="col me-5 mb-3">
                    <img style={imgStyle} src={google} alt="" />
                </div>
                <div className="col me-5 mb-3">
                    <img style={imgStyle} src={uber} alt="" />
                </div>
                <div className="col me-5 mb-3">
                    <img style={imgStyle} src={netflix} alt="" />
                </div>
                <div className="col me-5 mb-3">
                    <img style={imgStyle} src={airbnb} alt="" />
                </div>
            </div>


        </section>
    );
};

export default Companys;