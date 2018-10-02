import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        
            <header className="header-title">
                <h1 className="title">Lambda School</h1>
                <a href="#">@LambdaSchool · 26 jan</a>
            </header>
        
    );
}

export default HeaderTitle;