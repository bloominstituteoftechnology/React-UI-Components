import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// const click = ele => {
//   ele.addEventListener('click', () => {
//     if (ele.dataset.num) {
//       console.log(ele.dataset.num);
//     } else if (ele.dataset.act) {
//       console.log(ele.dataset.act);
//     }
//   });
// };
//
// const clear = document.querySelector('.clear');
// const numbers = document.querySelectorAll('.nButtons');
// const mathButtons = document.querySelectorAll('.aButtons');
//
// click(clear);
//
// numbers.forEach(button => {
//   click(button);
// });
//
// mathButtons.forEach(button => {
//   click(button);
// });
