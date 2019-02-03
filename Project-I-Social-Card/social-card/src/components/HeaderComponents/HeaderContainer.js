import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return(
        <div>
            <div className='header-top'>
                <HeaderTitle />
            </div>
        </div>
    );
}

export default HeaderContainer;
