import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className= "Header-Title">
            <p className="name-of-school">Lambda School</p>
            <p className="gray-color">@LambdaSchool</p>
            <p className="gray-color">&#5867; 26 Jan</p>
        </div>
    )
};

export default HeaderTitle;