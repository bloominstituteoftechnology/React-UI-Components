import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faSyncAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = props => {
    const comment = <FontAwesomeIcon icon={faComment} flip='horizontal' />;
    const shared = <FontAwesomeIcon icon={faSyncAlt} color={!props.shared ? 'null' : 'green'} />;
    const likeHeart = <FontAwesomeIcon icon={faHeart} color={!props.liked ? 'null' : 'red'} />;
    const email = <FontAwesomeIcon icon={faEnvelope} />;

    return (
        <div className='footerIcons'>
            <p>{comment}</p>
            <p>
                <span onClick={props.shareIt} className='shareIcon'>{shared}</span>
                <span className='shareCount'>{props.shares}</span>
            </p>
            <p>
                <span onClick={props.likeIt} className='likeIcon'>{likeHeart}</span> 
                <span className='likeCount'>{props.likes}</span>
            </p>
            <p>{email}</p>
        </div>
    );
}
 
export default Footer;
