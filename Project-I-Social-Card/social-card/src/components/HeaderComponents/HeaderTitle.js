import React from 'react';
import './Header.css';

let date = '26 jan';

const HeaderTitle = () => {
    return(
        <div className="header-title">
            <div className="header-username">
                <h1>Lambda School</h1>
                <h2>@LambdaSchool {date}</h2>
            </div>
        </div>
    )
}

export default HeaderTitle;