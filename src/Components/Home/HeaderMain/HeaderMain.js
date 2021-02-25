import React from 'react';
import Frame from '../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center">
            <div className="col-md-4 mx-2 pt-5">
                <h1 style={{fontWeight:'700'}}>Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
                <p style={{fontWeight:'700'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button style={{backgroundColor:"#111430",width:"100px"}} className="btn text-white">Hire us</button>
            </div>
            <div className="col-md-7">
                <img style={{height:'450px', width:'800px'}} src={Frame} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;