import React from 'react';
import HeaderTitleText from './HeaderTitleText';
import HeaderTag from './HeaderTag';

const HeaderTitle = () => {
    return(
        <div className="header-title-container">
            <HeaderTitleText />
            <HeaderTag/>
        </div>
    );
}


export default HeaderTitle;