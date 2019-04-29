import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


const HeaderBody = () => {
    return (
        <div className='header-body'>
            <HeaderTitle />
            <HeaderContent />
        </div>
        
    );
}

export default HeaderBody;