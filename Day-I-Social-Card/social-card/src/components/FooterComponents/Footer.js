import React from 'react';
import './Footer.css';
import FooterButton from './footerbutton.js';
import 'font-awesome/css/font-awesome.css';



const Footer = props => {
    return (
        <div className='footer'>
            <FooterButton font="fa fa-comment-o fa-flip-horizontal" />
            <FooterButton font="fa fa-retweet" number='6' />
            <FooterButton font="fa fa-heart-o" number='4' />
            <FooterButton font="fa fa-envelope-o" />
        </div>
    );
}

export default Footer;