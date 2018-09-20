import React from 'react';
import './Header.css';

import HeaderContent from "./HeaderContent";
 const HeaderTitle = (props) => {
    return(
        <div className="header-title">
            <h1>Lambda School</h1>
            <p className="grey">@LambdaSchool</p>
            <p className="grey">- 26 jan</p>
            <HeaderContent />
        </div>
    )
};
 export default HeaderTitle;