import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));

const card = document.querySelector('.card-container');

card.addEventListener('click', () => {
    console.log('Click');
});