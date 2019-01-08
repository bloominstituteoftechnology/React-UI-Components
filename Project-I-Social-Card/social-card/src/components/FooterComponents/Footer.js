import React from "react";
import "./Footer.css";
import like from "./images/like.png";
import mail from "./images/mail.png";
import recycle from "./images/recycle.png";
import speechBubble from "./images/speech-bubble.png";

function Footer() {
    return (
       <div className="footer">
           <img src={speechBubble} alt="not working"/>
           <img src={recycle} alt="not working"/>
           <img src={like} alt="not working"/>
           <img src={mail} alt="not working"/>
        </div> 
    )
}

export default Footer;