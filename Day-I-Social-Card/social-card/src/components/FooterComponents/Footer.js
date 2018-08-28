import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='card-footer'>
           <i class="far fa-comment"></i>
           <i class="fas fa-retweet"></i>
           <i class="far fa-heart"></i>
           <i class="far fa-envelope"></i>
        </div>
    );
};

// let tweet = document.querySelector('.fas fa-retweet');
// count = 0;
// tweet.click = function () {
//     count += 1;
//     tweet.innerHTML = count;
// }

export default Footer;