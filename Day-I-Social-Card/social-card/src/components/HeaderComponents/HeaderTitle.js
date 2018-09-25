import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const getCurrentDate = () => {
    const date = new Date()
    return date.toDateString()
}




const HeaderTitle = () => {
    return(
        <div><h1 className='title'>Lambda School</h1><h2>@LambdaSchool &middot; {getCurrentDate()}</h2><HeaderContent /></div>
    );
}

export default HeaderTitle;