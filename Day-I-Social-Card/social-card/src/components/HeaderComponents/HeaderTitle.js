import React from 'react';
import Moment from 'moment';
import './Header.css';


const HeaderTitle = () => {
    //const dateToFormat = Moment().format("DD MMM");
    return (

        <div className='header'>
            <h1 className='lambda'>Lambda School </h1>
            <div className='dateline'> @LambdaSchool •</div>
            <div className='date'>{Moment().format("DD MMM")}</div>
        </div>
    )
};

export default HeaderTitle;
