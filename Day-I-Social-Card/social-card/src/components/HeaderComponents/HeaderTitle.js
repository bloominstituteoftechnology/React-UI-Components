import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className ="header-title-container">
        <h2 className = 'lambda-title'>Lambda School</h2>
        <p className = 'lambda-handle'>@LambdaSchool</p>
        <p className = 'timestamp'>26 jan</p>
        </div>
    );
}

export default HeaderTitle;