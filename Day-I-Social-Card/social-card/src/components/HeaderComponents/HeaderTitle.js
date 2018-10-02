import React from 'react';
import './Header.css';


const HeaderTitle = () => {
    return (
        <div className='title'>
            <p className='main-title'>Lambda School</p>
            <p className='username'>@LambdaSchool</p>
            <p className='date'><span className='interpunct' >·</span>26 jan</p>
        </div>
    ); 
}

export default HeaderTitle;