import React from 'react';
import './Header.css';
// MY CODE BELOW
import HeaderContent from './HeaderContent' ;


// NAME COMPONENT AS FILE NAME
const HeaderContainer = () => {
    return (
        <div className="header-wrapper">
        {/* Header Container  */}
            <HeaderContent />
        </div>

    )
} ;
// REQUIRED
export default HeaderContainer ;
