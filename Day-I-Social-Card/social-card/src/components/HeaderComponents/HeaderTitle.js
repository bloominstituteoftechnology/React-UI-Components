import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';


const HeaderTitle = () => {
    return (
    <div className="lambda-header">
        <h4>Lambda School</h4>
        <p>
            <HeaderContent />
        </p>
    </div>
 );
};

export default HeaderTitle;