import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return (
        <div className= "headerTitle">
            <h4>Lambda School   <span>@LambdaSchool * 26 jan</span></h4>
            <HeaderContent />
        </div>
        
    );
}

export default HeaderTitle; 