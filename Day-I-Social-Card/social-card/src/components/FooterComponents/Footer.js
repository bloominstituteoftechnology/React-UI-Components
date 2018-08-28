import React from 'react';
import './Footer.css';

const Footer = () => {
    const colorChange = (e) => {
        if (e.target.style.color === "red") {
            e.target.style.color = "black";
        } else {
            e.target.style.color = "red";
        }
    };

    return (
        <div className="footer-div">
            <i onClick={(e) => { colorChange(e) }} className="far fa-comment"></i>
            <i onClick={(e) => { colorChange(e) }} className="fas fa-sync-alt"></i><span>6</span>
            <i onClick={(e) => { colorChange(e) }} className="far fa-heart"></i><span>4</span>
            <i onClick={(e) => { colorChange(e) }} className="far fa-envelope"></i>
        </div>
    )
};

export default Footer;
