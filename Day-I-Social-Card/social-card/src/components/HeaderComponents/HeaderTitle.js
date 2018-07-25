import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return  <div className="title-div">
                <h3 className="my-title">Lambda School</h3>
                <p className="lambda-link">@LambdaSchool - 23 jul</p>
                <HeaderContent />
            </div>;
}

export default HeaderTitle;
