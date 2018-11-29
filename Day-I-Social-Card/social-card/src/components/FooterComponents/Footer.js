import React from 'react';
import './Footer.css';
import HeartImage from "./HeartImage";
import MessageBubble from "./MessageBubble";
import MessageImage from "./MessageImage";
import RefreshImage from "./RefreshImage";

const Footer=()=>{

    return (
        <div className="footer">

            <MessageBubble/>
            <RefreshImage/>
            <HeartImage />
            <MessageImage/>


        </div>

    );

}

export default Footer;
