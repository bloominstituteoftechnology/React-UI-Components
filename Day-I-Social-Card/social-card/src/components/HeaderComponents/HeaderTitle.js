import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div className="header-container-title">
            <div class="header-user-name">Lambda School </div>
            <div class ="header-user-username"> @LambdaSchool</div>
            <span className="header-user-date"> 26 Jan</span>
       </div>
    
    );
  };
   export default HeaderTitle;
       
  