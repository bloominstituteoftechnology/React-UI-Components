import React from "react";
import comment from "./comment.svg";

const Footer = (props) => {
    return (
        <div className="footerWrap">
            <img src={comment} alt="comment icon" className="comment" />
        </div>
    );
}


export default Footer;