import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const reactWeb = document.querySelector('.CardContainer');
console.log(reactWeb);
reactWeb.addEventListener('click', () => {
  window.location = 'http://www.reactjs.org';
});
