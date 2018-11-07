import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(<App />, document.getElementById('root'));


let retweetButton = document.querySelector('.fa-retweet');
let numberOfRetweets = document.querySelector('.retweetNumber');



function retweet(){
    let retweets = 0;
    retweetButton.addEventListener('click', event => {
        retweets += 1;
        numberOfRetweets.textContent = retweets;
    })
};

retweet();

let likeButton = document.querySelector('.fa-heart-o');
let numberOfLikes = document.querySelector('.likeNumber');

function like() {
    let likes = 0;
    likeButton.addEventListener('click', event => {
        likes += 1;
        numberOfLikes.textContent = likes;
    })
} 

like();