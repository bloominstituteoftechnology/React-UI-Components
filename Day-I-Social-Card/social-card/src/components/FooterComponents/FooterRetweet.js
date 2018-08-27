import React from 'react';
import './Footer.css';

let retweetCount = 0;

const FooterRetweet = () => {
    return (
        <div class="footer-retweet" onClick={handleClick}>
            <img src={require("./img/footer-retweet.png")} alt="footer-comment" />
            <p class="retweet-num">{`${retweetCount}`}</p>
        </div>
    )
};

function handleClick(e) {
    retweetCount++;

    let rc = document.querySelector('.retweet-num');
    rc.innerText = retweetCount;
}

export default FooterRetweet;