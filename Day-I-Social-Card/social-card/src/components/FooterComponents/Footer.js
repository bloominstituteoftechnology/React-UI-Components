import React from 'react';
import './Footer.css';
import comment from '../../images/comment.png';
import heart from '../../images/heart.png';
import message from '../../images/message.png';
import reload from '../../images/reload.png';


const Footer = () => {
    return (
        <div id="footer">
            <div>
                <img src={comment} />
            </div>
            <div>
                <img src={reload} />
                <h2>6</h2>
            </div>
            <div>
                <img src={heart} />
                <h2>4</h2>
            </div>
            <div>
                <img src={message} />
            </div>
        </div>
    )
}

export default Footer;