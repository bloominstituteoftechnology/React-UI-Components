import React from 'react';
import HeaderContent from './HeaderContent';
import './Header.css';
const HeaderTitle = () => {
    return (
        <div className="header-title-wrapper">
            <div className="header-title">
                <h3>Lambda School</h3>
                
                <HeaderContent />
            </div>
        </div>
    );
}
 export default HeaderTitle; 