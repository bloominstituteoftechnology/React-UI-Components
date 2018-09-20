import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let likes = 0;

ReactDOM.render(<App likes={likes}/>, document.getElementById('root'));


const cardContainer = document.querySelector('.card-container');
cardContainer.addEventListener('click', function(){
    window.location.href = 'http://www.reactjs.org/';
})

const heartIcon = document.querySelector('.fa-heart-o');
heartIcon.addEventListener('click', function(){
    likes++;
})

