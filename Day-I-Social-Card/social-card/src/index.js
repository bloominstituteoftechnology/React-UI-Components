import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


const cardContainer = document.querySelector('.card-container');
cardContainer.addEventListener('click', function(){
    window.location.href = 'http://www.reactjs.org/';
})