import React from 'react';
import './Footer.css';


const MyFooter = () => {
    return (
        <div className="footer-container">
           <i className="fa fa-comment-o" aria-hidden="true"></i>
           <i className="fa fa-refresh" aria-hidden="true"></i>
           <i className="fa fa-heart-o" aria-hidden="true"></i>
           <i className="fa fa-envelope-o" aria-hidden="true"></i>
        </div>
    );
}

export default MyFooter;