import React from 'react';
import './Header.css';

import HeaderContent from './HeaderContent'

function HeaderTitle(props) {
    return (
        <div class='text-content'>
            <h1>Lambda School <span>@LambdaSchool - 05 nov</span></h1>

            <HeaderContent />
        </div>
    );
}

export default HeaderTitle;