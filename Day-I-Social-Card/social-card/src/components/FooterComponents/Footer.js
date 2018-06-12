import React from 'react';
import Comments from './Comments';
import './Footer.css';

const Footer = () => {
    return (
         <div className='d-flex justify-content-between align-items-start'>
             <div className = 'offset-1 col-8 p-0' >
            <Comments />
             </div> 
             </div>
       

    );
}

export default Footer;