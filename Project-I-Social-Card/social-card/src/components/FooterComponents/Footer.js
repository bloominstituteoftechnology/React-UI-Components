import React from "react";
import "./Footer.css";

function chatClick() {
  alert('Text Handler');
}

const FooterContent = props => {

  return (
    <div className="footer-container">
      <i className="material-icons" onClick={chatClick()}>chat_bubble_outline</i>
      <i className="material-icons">autorenew</i>
      <i className="material-icons">favorite_border</i>
      <i className="material-icons">mail_outline</i>
    </div>
  );
};

export default FooterContent;
