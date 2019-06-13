import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <div className='footerCont'>
            <img className='iconImg' src="https://img.icons8.com/metro/26/000000/topic.png" alt='comment' />
            <div className='flexIcons'>
                <img className='iconImg' src="https://img.icons8.com/ios/26/000000/connection-sync.png" alt='cycle' />
                <p>6</p>
            </div>
            <div className='flexIcons'>
                <img className='iconImg' src="https://img.icons8.com/ios/50/000000/hearts.png" alt='heart' />
                <p>4</p>
            </div>
            <img className='iconImg' src="https://img.icons8.com/ios/50/000000/new-post.png" alt='mail' />
        </div>
    );
};

export default Footer