import React from "react";
import "./Footer.css";

const Footer = props => {
  return <div className="footer">
      <div className="footer-container">
        {props.symbols.comment}
        {props.symbols.sync}
        {props.symbols.like}
        {props.symbols.mail}
      </div>
    </div>;
};

export default Footer;
