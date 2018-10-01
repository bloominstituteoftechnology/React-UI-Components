import React from 'react';
import './Footer.css';

const FooterIcon = ({type, count = 0, active = false}) => {

    const renderIcon = () => {
        if(type === 'heart' && !active) {
            return <i className="far fa-heart"></i>
        }

        if(type === 'heart' && active) {
            return <i className="fas fa-heart heart-active"></i>
        }

        if(type === 'rt' && !active) {
            return <i className="fas fa-retweet"></i>
        }

        if(type === 'rt' && active) {
            return <i className="fas fa-retweet rt-active"></i>
        }
        if(type === 'comment') {
            return <i className="far fa-comment"></i>
        }
        if(type === 'dm') {
            return <i className="far fa-envelope"></i>
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
