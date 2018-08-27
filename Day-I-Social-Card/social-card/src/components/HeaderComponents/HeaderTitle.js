import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';


const HeaderTitle = () => {
    return (
      <div className="headerContainer">
        <div className="headerTitle">
        
       
        Lambda School <span class="innerTitle"> @LambdaSchool 26 jan</span>
        <HeaderContent />
         
        </div>
      </div>
    );
  };
  
  export default HeaderTitle;