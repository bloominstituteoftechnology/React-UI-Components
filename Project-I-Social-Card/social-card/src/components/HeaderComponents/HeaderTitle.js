import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent.js';
import moment from 'moment';

const HeaderTitle = props => {
    return (
        <div className="header-content">
            <h2>Lambda School</h2>
            <h3>@LambdaSchool</h3>
            <h3>&middot;</h3>
            <h3>{moment(1546271084238).fromNow()}</h3>
            <HeaderContent />
        </div>
    );
};

export default HeaderTitle;