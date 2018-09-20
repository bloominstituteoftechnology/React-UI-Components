import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className= "Header-Title">
            <p className="bold">Lambda School</p>
            <p className="gray-margin">@LambdaSchool</p>
            <p className="gray-margin">&#5867; 26 Jan</p>
        </div>
    )
};

export default HeaderTitle;