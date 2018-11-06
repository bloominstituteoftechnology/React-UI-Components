import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <nav className='footer'>
            <i class="fa fa-comment-o fa-lg" aria-hidden="true"></i>
            <i class="fa fa-refresh fa-lg" aria-hidden="true">{props.shares}</i>
            <i class="fa fa-heart-o fa-lg" aria-hidden="true">{props.likes}</i>
            <i class="fa fa-envelope-o fa-lg" aria-hidden="true"></i>
        </nav>
    )
}

export default Footer;