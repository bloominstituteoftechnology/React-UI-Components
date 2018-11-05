import React from 'react';
import './Footer.css';

const FooterContainer = () => {
    return(
        <footer>
            <div className="icon"> <i class="far fa-comment"></i> </div>
            <div className="icon"> <i class="fas fa-retweet"></i> 6</div>
            <div className="icon"> <i class="far fa-heart"></i> 4</div>
            <div className="icon"> <i class="far fa-envelope"></i></div>
        </footer>
    );
}

export default FooterContainer;