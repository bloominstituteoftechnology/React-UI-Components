import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const CardFooter = (props) => {
    let likes = 0;
    let repost = 0;
    return (
        <div className='cardFooter'>
            <FontAwesomeIcon icon="comment" className='icons'/>
            <FontAwesomeIcon icon="retweet" className='icons'/>
            <p className='counter'>{repost}</p>
            <FontAwesomeIcon icon="heart" className='icons'/>
            <p className='counter'>{likes}</p>
            <FontAwesomeIcon icon="envelope" className='icons'/>
        </div>
    );
}

export default CardFooter;