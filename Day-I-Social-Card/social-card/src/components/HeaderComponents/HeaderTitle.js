import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return(
        <div>
            <span><strong>Lambda School </strong></span> 
            <span className="headerTitleHandleAndDate">@LambdaSchool - 26 jan</span>
        </div>
    );
}

export default HeaderTitle;