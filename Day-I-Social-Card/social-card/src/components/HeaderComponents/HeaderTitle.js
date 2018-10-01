import React from 'react';
import './Header.css';


const HeaderTitle = (props) => {
    return (
        <div className = "header-title">
            <p>Lamdba School</p>
            <ul>@LambdaSchool
                <li>26 jan</li>
            </ul>
        </div>
    );
};

export default HeaderTitle;
