import React from 'react';
import './Header.css';

const HeaderTitle = (props) => {
  return (
    <div className = 'headertitle'>
      <h1>Lambda School</h1>
      <p className = 'th'>@LambdaSchool</p>
      <p className = 'date'>•Jan 26</p>
     
    </div>
  );
}

export default HeaderTitle;