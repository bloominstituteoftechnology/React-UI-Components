import React from 'react';
import './Footer.css';
import HeartImage from "./HeartImage";
import MessageBubble from "./MessageBubble";
import MessageImage from "./MessageImage";
import RefreshImage from "./RefreshImage";

const Footer=()=>{

    return (
        <div className="footer">
            <HeartImage />
            <MessageBubble/>
            <MessageImage/>
            <RefreshImage/>
        </div>

    );

}

export default Footer;
