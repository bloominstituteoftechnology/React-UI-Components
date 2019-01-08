import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle';
import HeaderTitleBottom from './HeaderTitleBottom'

const HeaderTextContainer = () => {
    return (
        <div>
            <HeaderTitle />
            <HeaderTitleBottom />
        </div>
    )
}

export default HeaderTextContainer