import React from 'react';
import './Footer.css';
import Up from './images/up.png';
import Down from './images/down.png';
import Bubble from './images/bubble.png';
import Mail from './images/mail.png';

const Footer = () => {
   return <div className = 'footerImg'>
         
         <div className='up'>
            <img src={Up} alt="up" />
        </div>

<div className='down'>
<img src={Down} alt="down" />
</div>

<div className='bubble'>
<img src={Bubble} alt="bubble" />
</div>

<div className='mail'>
<img src={Mail} alt="mail" />
</div>
         
         
    </div>;
    
  };
  
  export default Footer;

