import React from 'react';
import './Header.css';


const HeaderTitle = () => {
  return (
    <div className = 'header-title'>
    <div className = 'header-title-big'>
      Lambda School
    </div>
    <div className = 'header-title-small'>
      @LambdaSchool <span>&#183;</span> 26 jan
    </div>
  </div>
  );
};



export default HeaderTitle;