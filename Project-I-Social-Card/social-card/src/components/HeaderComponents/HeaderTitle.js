import React from 'react';
import './Header.css';
import moment from 'moment'

function HeaderTitle() {
    let postDate = moment().format('DD MMM').toLowerCase();
    return (
        <p className="twitter-title">Lambda School <span>@LambdaSchool &#183; {postDate}</span></p>
    )
}

export default HeaderTitle
