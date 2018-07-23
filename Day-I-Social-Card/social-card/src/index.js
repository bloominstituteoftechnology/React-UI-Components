import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

let cardContent = document.querySelector(".cardBox");

cardContent.addEventListener('click', () => {
    window.open('https://www.reactjs.org/')
})

let conversation = document.querySelector(".conversation");

conversation.addEventListener('click', () => {
    window.TweenMax.fromTo(conversation, 1, {scale:1}, {scale:5, onComplete: () => {
        window.TweenMax.fromTo(conversation, 1, {scale:5}, {scale:1})
    }});
})

let retweet = document.querySelector(".retweet");

retweet.addEventListener('click', () => {
    window.TweenMax.fromTo(retweet, 1, {scale:1}, {scale:5, onComplete: () => {
        window.TweenMax.fromTo(retweet, 1, {scale:5}, {scale:1})
    }});
})
let heart = document.querySelector(".heart");

heart.addEventListener('click', () => {
    window.TweenMax.fromTo(heart, 1, {scale:1}, {scale:5, onComplete: () => {
        window.TweenMax.fromTo(heart, 1, {scale:5}, {scale:1})
    }});
})
let mail = document.querySelector(".mail");

mail.addEventListener('click', () => {
    window.TweenMax.fromTo(mail, 1, {scale:1}, {scale:5, onComplete: () => {
        window.TweenMax.fromTo(mail, 1, {scale:5}, {scale:1})
    }});
})