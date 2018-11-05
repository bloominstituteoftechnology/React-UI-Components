import React from 'react';
import './Footer.css';

let numComments = 0;
let numRetweets = 0;
let numLikes = 0;

function Footer(props) {
    return (
        <footer className='footer-container'>
            <div className='icon-box'>

                <div className='icon' onClick={addComment}>
                <i class="fa fa-comment" aria-hidden="true"></i>
                <p id='numComments'></p>
                </div>

                <div className='icon' onClick={addRetweet}>
                <i class="fa fa-retweet" aria-hidden="true"></i>
                <p id='numRetweets'></p>
                </div>

                <div className='icon' onClick={addLike}>
                <i class="fa fa-heart" aria-hidden="true"></i>
                <p id='numLikes'></p>
                </div>

                <div className='icon'>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                </div>

            </div>
        </footer>
    );
}

function addComment() {
    const commentNumber = document.getElementById('numComments');
    numComments++;
    commentNumber.textContent = `${numComments}`;
}
function addRetweet() {
    const retweetNumber = document.getElementById('numRetweets');
    numRetweets++;
    retweetNumber.textContent = numRetweets;
}
function addLike() {
    const likesNumber = document.getElementById('numLikes');
    numLikes++;
    likesNumber.textContent = numLikes;
}

export default Footer;