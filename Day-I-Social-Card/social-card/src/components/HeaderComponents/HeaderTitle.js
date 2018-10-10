import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';



const HeaderTitle = (props) => { 
    return (
        <div className= 'Header-title'>
        <div>Lambda School</div>
        <HeaderContent />
        </div>
    )
}

export default HeaderTitle;