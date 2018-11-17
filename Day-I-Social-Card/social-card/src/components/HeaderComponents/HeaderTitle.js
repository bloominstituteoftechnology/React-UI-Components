import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div className="header-container-title">
            <div className="header-user-name">Lambda School </div>
            <div className ="header-user-username"> @LambdaSchool</div>
            <div className="header-space">&bull;</div>
            <span className="header-user-date"> 26 Jan</span>
       </div>
    
    );
  };
   export default HeaderTitle;
       
  