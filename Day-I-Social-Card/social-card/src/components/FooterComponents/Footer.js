import React from 'react';
import "./Footer.css";


const Footer = () => {

return (
  <div className="chat-bubble">
    {" "}
    <i className="far fa-comment"/>
        {" "}
        <div className= "sync">
            <i class="fas fa-sync" /><p>6</p></div>

        {" "}
        <div className="heart">
            <i class="fas fa-heart" /><p>4</p></div>
        {" "}
        <i class="far fa-envelope"/>
  </div>
);
};

export default Footer;