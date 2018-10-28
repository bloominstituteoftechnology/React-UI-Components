import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faSyncAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const comment = <FontAwesomeIcon icon={faComment} flip='horizontal' />;
const shared = <FontAwesomeIcon icon={faSyncAlt} />;
const likeHeart = <FontAwesomeIcon icon={faHeart}/>;
const email = <FontAwesomeIcon icon={faEnvelope} />;

const Footer = () => {
    return (
        <div className='footerIcons'>
            <p>{comment}</p>
            <p>{shared} <span className='shareCount'>6</span></p>
            <p>{likeHeart} <span className='likeCount'>4</span></p>
            <p>{email}</p>
        </div>
    );
}
 
export default Footer;
