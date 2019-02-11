import React from 'react';
import './Header.css';

function HeaderTitle () {
    return (
        <div className = "header-title"> 
            <h3 className ="display-name">Lambda School</h3>
            <p className ="link-text">@LambdaSchool - 26 Jan</p>  
        </div>
    );
};

export default HeaderTitle;