import React from 'react';
import './Header.css';

const HeaderTitle = (props) =>  {
    return(
        <div className="header-title">
            <div className="strong">Lambda School</div>
            <div className="gray-text">@LambdaSchool  •  26 Jan</div>
        </div>
    )
}

export default HeaderTitle;
