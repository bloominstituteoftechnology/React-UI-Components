import React from 'react';
import './Header.css';



const HeaderTitle = () => (
    <div className="header-title">
        
        <h1 className="displayname">Lambda School</h1>
        <p className="greytext username">@LambdaSchool</p>
        <p className="greytext dot">⸱</p>
        <p className="greytext date">26 jan</p>    
    </div>
);

export default HeaderTitle;