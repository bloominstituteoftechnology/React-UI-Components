import React from 'react';
import './Header.css';

const HeaderTitle = (props) => {
    return (
        <div className="header-title">
            <h1>Lambda School</h1>
            <p>@LambdaSchool</p>
            <p>•</p>
            <p className="header-date">26 Jan</p>
        </div>
        
    )
}

export default HeaderTitle;