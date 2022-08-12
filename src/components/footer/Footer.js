import React from 'react';
import './Footer.css';
import Github from '../../assets/github.png';
import Insgta from '../../assets/instagram.png';
import Linkdin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className='footerContainer'>
        <div className='blur footer-blur'></div>
  
        <hr />
        <div className="footer">
            <div className="socialLisks">
                <img src={Github} alt="" />
                <img src={Insgta} alt="" />
                <img src={Linkdin} alt="" />
            </div>
            <img src={Logo} alt="" />
        </div>
       
    </div>
    );
}

export default Footer;
