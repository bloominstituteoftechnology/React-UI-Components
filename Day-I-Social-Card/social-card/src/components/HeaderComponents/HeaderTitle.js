import React from 'react';
import './Header.css';

const HeaderTitle = (props) => {
  let d = new Date();
  let date = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'];
  return (
    <div className = 'headertitle'>
      <h1>Lambda School</h1>
      <p className = 'th'>@LambdaSchool</p>
      <p>•</p>{d.getDate()}<p className = 'date'></p>
      <p>{date[d.getMonth()]}</p>
     
    </div>
  );
}



export default HeaderTitle;