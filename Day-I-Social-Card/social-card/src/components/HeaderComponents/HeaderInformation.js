import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderInformation = (props) => {
    return (
        <div className='headerInfo'>
            <HeaderTitle />
            <HeaderContent />
        </div>
    );
}
export default HeaderInformation;