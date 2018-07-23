import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

let cardContent = document.querySelector(".cardBox");

cardContent.addEventListener('click', () => {
    window.open('https://www.reactjs.org/')
})