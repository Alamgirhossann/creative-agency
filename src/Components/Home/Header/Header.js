import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import HeaderMain from '../../Home/HeaderMain/HeaderMain';
import Companys from '../../Home/Companys/Companys';

const Header = () => {
   
    return (
        <div style={{backgroundColor:"#FBD062", height:'auto'}}>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,156L1440,5L1440,320L0,320Z"></path></svg>
            <Companys></Companys>
        </div>
    );
};

export default Header;