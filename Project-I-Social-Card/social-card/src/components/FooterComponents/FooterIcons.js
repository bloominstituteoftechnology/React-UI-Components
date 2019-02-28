import React from 'react';
import './Footer.css';

const FooterIcons = props => {
    return (
        <div className='iconContainer'>
            <p>
                <i class="far fa-comment"></i>
            </p>
            <p>
                <i class="fas fa-retweet"></i>
            </p>
            <p>
                <i class="far fa-heart"></i>
            </p>
            <p>
                <i class="far fa-envelope"></i>
            </p>
        </div>
    )
}

export default FooterIcons;