import React from 'react';

function Footer (props) {
    return (
        <div className="footer">
            <div className="comments">
                <i class="far fa-comment"></i>
                <p>{props.commentNumber}</p>
            </div>
            <div className="retweet">
                <i class="fas fa-sync-alt"></i>
                <p>{props.retweets}</p>
            </div>
            <div className="likes">
                <i class="far fa-heart"></i>
                <p>{props.likes}</p>
            </div>
            <i class="far fa-envelope"></i>
        </div>
    );
}

export default Footer;