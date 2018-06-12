import React from 'react';
import './Button.css';

const NumberButton = props => {
return (
<div className = 'number-button ${props.class}'>{props.name}</div>
  );
};


// const NumberButton = () => {
// return (
//   <div className = 'whiteButtons'>
//     <div className = 'clear'>
//       clear
//     </div>
//     <div className = 'numbers'>
//       <div className = 'asdf'> <p>7</p> <p>8</p> <p>9</p> </div>
//       <div> <p>4</p> <p>5</p> <p>6</p> </div>
//       <div> <p>1</p> <p>2</p> <p>3</p> </div>
//       <div> <p>0</p> </div>
//     </div>
//   </div>
//   );
// };


export default NumberButton;
