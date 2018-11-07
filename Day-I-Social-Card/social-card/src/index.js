import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

document.querySelector('.card-container').addEventListener('mouseenter', (event) => event.target.style.cursor = "pointer");
document.querySelector('.card-container').addEventListener('click', () => window.location.href = "https://www.reactjs.org");