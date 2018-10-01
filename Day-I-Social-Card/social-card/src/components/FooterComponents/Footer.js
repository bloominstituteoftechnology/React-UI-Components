import React from 'react';
import './Footer.css';

const FooterContainer = () => {
    return (
       <div className="footerContainer">
            <div className="footerIcon">
              <i class="fa fa-comment"></i>
            </div>
            <div className="footerIcon">
                <i class="material-icons">cached</i>
                <p>6</p>
            </div>
            <div className="footerIcon">
                <i class="fa fa-heart"></i>
                <p>4</p>
            </div>
            <div className="footerIcon">
              <i class="fa fa-envelope"></i>
            </div>
        </div>
    );
}

export default FooterContainer 