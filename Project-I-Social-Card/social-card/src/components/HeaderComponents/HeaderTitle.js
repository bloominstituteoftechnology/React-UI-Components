import React from 'react';
import moment from 'moment';

const HeaderTitle = () => {
    return (
        <div className='headerContainer--title'>
            <p>Lambda School <span>@LambdaSchool • {moment().format('DD MMM').toLowerCase()}</span></p>
        </div>
    )
}

export default HeaderTitle;