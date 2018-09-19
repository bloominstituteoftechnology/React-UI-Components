import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className="Header-Title">
            <h1>Lambda School</h1>
            <p className="stamp">@LambdaSchool • 26 jan</p>
            {/* <p class="stamp"></p> */}
        </div>
    )
}

export default HeaderTitle;