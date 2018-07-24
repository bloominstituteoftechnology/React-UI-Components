import React from 'react';
import './Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faRetweet, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons'


library.add(faComment, faRetweet, faHeart, faEnvelope)

function retweet(){
    console.log("retweet");
    
}

const Footer = () => {

    return (
        <div className="footer">
             <FontAwesomeIcon icon={faComment} />
             <FontAwesomeIcon icon={faRetweet} onClick={retweet}/>
             <FontAwesomeIcon icon={faHeart} />
             <FontAwesomeIcon icon={faEnvelope} />
        </div>
    )
};

export default Footer;