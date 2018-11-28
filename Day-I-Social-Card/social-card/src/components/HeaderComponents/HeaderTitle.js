import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
   return <div className ="header-title">
        <div className="title">
            <h1>Lambda School</h1>
            <h2 className="title-htwo">@LambdaSchool</h2>
            <h2 className="title-htwo">26 jan</h2>
        </div>
        <HeaderContent />
    </div>
};

export default HeaderTitle;
