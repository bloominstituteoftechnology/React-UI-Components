import React from "react";
import "./Footer.css";

const FooterContainer = () => {
	return (
		<div className="footerContainer">
			<a href="#" className="footerContainer__icon"><i className="far fa-comment " /></a>
            <a href="#" className="footerContainer__icon"><i className="fas fa-exchange-alt "></i></a>
            <span className="footerContainer__numbers"> 4 </span>
            <a href="#" className="footerContainer__icon"><i className="far fa-heart "></i></a>
            <span className="footerContainer__numbers"> 6 </span>
            <a href="#" className="footerContainer__icon"><i className="far fa-envelope "></i></a>
		</div>
	);
};

export default FooterContainer;