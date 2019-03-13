import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div className = "header-container">
            <h1 className = "header-title">
                Lambda School
            </h1>
            <div className = "handle">
                @LambdaSchool
            </div>
            <div className = "timestamp">26 jan
            </div>
        </div>
    );
};

export default HeaderTitle;