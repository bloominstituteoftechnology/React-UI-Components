import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const card = document.querySelector(".card-body");
card.addEventListener('click', (e) => {
    window.location = e.target.parentElement.querySelector('a').href;
});
