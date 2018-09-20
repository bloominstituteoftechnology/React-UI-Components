import React from 'react';
import './Footer.css';

let likeCount = 0;

const FooterLike = () => {
    return (
        <div class="footer-like" onClick={handleClick}>
            <img src={require("./img/footer-heart.png")} alt="footer-comment" />
            <p class="like-num">{`${likeCount}`}</p>
        </div>
    )
};

function handleClick(e) {
    likeCount++;

    let lc = document.querySelector('.like-num');
    lc.innerText = likeCount;
}

export default FooterLike;