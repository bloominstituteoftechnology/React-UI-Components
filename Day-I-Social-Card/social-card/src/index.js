import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const card = document.querySelector(".card-body");
card.addEventListener('click', (e) => {
    window.location = e.target.parentElement.querySelector('a').href;
});

const Counter = (n) => {
    let count = n;

    return function() { return ++count };
}

const shareIcon = card.parentElement.querySelector("#share-icon");
const shareIconCount = shareIcon.querySelector(".social-counter");
const shareCounter = new Counter(6);
shareIcon.addEventListener('click', (e) => {
    shareIconCount.innerText = shareCounter();
});

const likesIcon = card.parentElement.querySelector("#likes-icon");
const likesIconCount = likesIcon.querySelector(".social-counter");
const likesCounter = new Counter(4);
likesIcon.addEventListener('click', (e) => {
    likesIconCount.innerText = likesCounter();
});
