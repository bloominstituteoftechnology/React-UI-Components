import React from 'react';
import './Header.css';

function HeaderTitle() {
    return (
        <div className="header-title">
            <p className="strong">Lambda School</p>
            <p className="grey-font">@LambdaSchool</p>
            <p className="grey-font">&bull; 27 Feb</p>
        </div>
    );
}

export default HeaderTitle;