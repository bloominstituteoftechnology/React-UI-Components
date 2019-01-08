import React from 'react';
import './Header.css';

import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
    return (
        <div>
            <HeaderTitle />
            <HeaderContent />
        </div>
    );
};

export default HeaderContainer;