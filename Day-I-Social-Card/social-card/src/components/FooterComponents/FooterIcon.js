import React from 'react';
import './Footer.css';

const FooterIcon = ({type, count = 0, active = false}) => {

    const renderIcon = () => {
        if(type === 'heart' && !active) {
            return <i class="far fa-heart"></i>
        }

        if(type === 'heart' && active) {
            return <i class="fas fa-heart heart-active"></i>
        }

        if(type === 'rt' && !active) {
            return <i class="fas fa-retweet"></i>
        }

        if(type === 'rt' && active) {
            return <i class="fas fa-retweet rt-active"></i>
        }
        if(type === 'comment') {
            return <i class="far fa-comment"></i>
        }
        if(type === 'dm') {
            return <i class="far fa-envelope"></i>
        }

    }

    return (
        <div className='icon-container'>
            {renderIcon()}
            <div className='count'>{(count === 0) ? '': count}</div>
        </div>
    );
}

export default FooterIcon;
