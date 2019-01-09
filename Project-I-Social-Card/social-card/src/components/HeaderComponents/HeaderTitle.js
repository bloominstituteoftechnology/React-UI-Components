import React from 'react';
import './Header.css';

function HeaderTitle() {
    return (
        <div className="HeaderTitle">
            <ul>
                <li className="bold">Lambda School</li>
                <li>@LambdaSchool</li>
                <li className="bullet">26 jan</li>
            </ul>
        </div>
    )
}

export default HeaderTitle;