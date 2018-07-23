import React from 'react';
import "./Footer.css";

const FooterContainer = () => {

  return(
    <div className="footer-container">
			<a href="#" className="footer-container-icon"><i className="far fa-comment flip" /></a>
            <a href="#" className="footer-container-icon"><i className="fas fa-exchange-alt "></i> 4</a>
            <a href="#" className="footer-container-icon"><i className="far fa-heart "></i> 6</a>
            <a href="#" className="footer-container-icon"><i className="far fa-envelope "></i></a>
		</div>
  );
};

export default FooterContainer;
