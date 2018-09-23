import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle =()=>{
    return(
       <div className="header-title-container">
            <div className="header-title">
                 <h1> Lambda School &nbsp;</h1>
                <h4>@lambdaSchool &nbsp;</h4>
                <h4> 26 Jan</h4>
            </div>
            <div className="header-content">
                <HeaderContent />
            </div>
       </div>
        
    );
}

export default HeaderTitle;
