import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const cardClick = () => {
  window.location.href = "http://www.google.com";
};

const cardContainer = document.querySelector('.cardContainer');
cardContainer.addEventListener('click', cardClick);