import React from 'react';
import './Header.css';




let HeaderTitle = (props) => {
  return(
    <div className="Header-Title">
      <h1>Lambda School</h1>
      <p className="gray">@LambdaSchool</p>
      <p className="gray">• 26 jan</p>
    </div>
  );
}


export default HeaderTitle; 