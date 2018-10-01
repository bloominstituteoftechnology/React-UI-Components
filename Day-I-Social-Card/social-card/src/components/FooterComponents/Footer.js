import React from 'react';
import './Footer.css';


const Footer = (props) => {
    console.log(props);
    return (
        <div className="footer">
            <i className="fa fa-comment-o"></i>
            <i className="fa fa-refresh"><span>6</span></i>
            <i className="fa fa-heart-o"><span>4</span></i>
            <i className="fa fa-envelope-o"></i>
        </div>
    )
}

export default Footer;