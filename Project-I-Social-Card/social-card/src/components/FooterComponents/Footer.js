import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footerCont'>
            <img className='iconImg' src="https://img.icons8.com/metro/26/000000/topic.png" />
            <div className='flexIcons'>
                <img className='iconImg' src="https://img.icons8.com/ios/26/000000/connection-sync.png" />
                <p>6</p>
            </div>
            <div className='flexIcons'>
                <img className='iconImg' src="https://img.icons8.com/ios/50/000000/hearts.png" />
                <p>4</p>
            </div>
            <img className='iconImg' src="https://img.icons8.com/ios/50/000000/new-post.png" />
        </div>
    );
};

export default Footer