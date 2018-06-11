import React from 'react';
import './Footer.css';
import FooterComment from './FooterComment';
import FooterLike from './FooterLike';
import FooterEmail from './FooterEmail';
import FooterRefresh from './FooterRefresh';

const Footer = () => {
    return (
        <div className='footer'> 
            <FooterComment />
            <FooterLike />
            <FooterEmail />
            <FooterRefresh />
        </div>
    )
}

export default Footer;