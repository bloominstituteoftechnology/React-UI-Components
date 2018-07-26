import React from 'react'
import './Footer.css';

const Footer = () => {
    return(
        <div>
            <img className="commentImage" src="https://image.freepik.com/free-icon/comment-
            white-oval-bubble_318-42179.jpg" alt="Comment Symbol" />

            <img className="retweetImage" src="https://image.freepik.com/free-icon/retweet-
            arrows-symbol_318-41844.jpg" 
            alt="Retweet Image" />

            <img className="heartImage" 
            src="https://i.pinimg.com/736x/2e/d4/cb/2ed4cb2fb0a7d8ec108e71c7abc8f114--
            hearts-printable-heart-template-printable-free.jpg" 
            alt="Heart Image" />
            
            <img className="envelopeImage" src="https://image.flaticon.com/icons/svg/53/53726.svg" 
            alt="Envelope Image" />
        </div>
    );
}

export default Footer;