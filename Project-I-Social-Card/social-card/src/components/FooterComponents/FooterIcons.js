import React from 'react';
import './Footer.css';

const FooterIcons = props => {
    return (
        <div className='iconContainer'>
            <p>
                <div className="footerIcon">
                    <i class="far fa-comment"></i>
                </div>
            </p>
            <p>
                <div className="footerIcon">
                    <i class="fas fa-retweet"></i>
                </div>
                <div className="footerIconCounter">
                    <div>
                        ##
                    </div>
                </div>
                
            </p>
            <p>
                <div>
                    <i class="far fa-heart"></i>
                </div>
                <div className="footerIconCounter">
                    <div>
                        ##
                    </div>
                </div>
            </p>
            <p>
                <div className="footerIcon">
                    <i class="far fa-envelope"></i>
                </div>
            </p>
        </div>
    )
}

export default FooterIcons;