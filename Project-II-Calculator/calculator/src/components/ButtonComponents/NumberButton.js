import React from 'react';
import '../../styles/Button.css';

// const nums = [0,1,2,3,4,5,6,7,8,9];
// const NumberButton = () => { return (
//   <div className='nums-container'>{nums.map(n => {
//     return <div className = 'nums'>{n}</div>;
//   })}</div>   


// )}
// const NumberButton = () => {return (
//   <table> <tr className= 'zero'>
//     <th>0</th>
//        </tr> 
//        <tr class= 'row-1-3'>
//          <th>1 </th>
//          <th>2 </th>
//          <th>3 </th>
//        </tr>
//        <tr className = 'row-4-6'>
//          <th>4 </th>
//          <th>5</th>
//          <th>6 </th>
//        </tr>
//        <tr className = 'row-7-9'>
//          <th>7 </th>
//          <th>8</th>
//          <th>9</th>
//        </tr>
//        <tr>
//          <th className = 'clear'>Clear</th>
//        </tr>
       
//        </table>
// )}
const NumberButton = props => {
  return (
      <button className={props.buttonStyle}>{props.number}</button>
  )
}

export default NumberButton;

 