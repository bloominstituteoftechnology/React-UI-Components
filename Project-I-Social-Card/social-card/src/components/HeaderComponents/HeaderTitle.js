import React from 'react';
import './Header.css';
import moment from 'moment'

const HeaderTitle = (props) => {
    return (
        <div>
            <p>
                <span className='main'>Lambda School</span> <span className="sub">@LambdaSchool &middot; {moment().format('D MMM')}</span>
            </p>
        </div>
    )
}

export default HeaderTitle;