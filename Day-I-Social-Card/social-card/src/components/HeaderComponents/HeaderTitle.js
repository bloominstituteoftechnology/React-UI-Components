import React from 'react';
import './Header.css';
import moment from 'moment'

const HeaderTitle = () => {
    return (

        <div className='col-10'>
            <p className='header_title'>Lambda School <span className='gray'>@LambdaSchool  &bull; {moment().format(" Do MMM")} </span> </p>

        </div>

    )
}

export default HeaderTitle;