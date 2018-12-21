import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';


function HeaderTitle (){
    return (
        <div className="TitleContainer">
            <div className='HeaderTitle'>
                <div className='name'>Lambda School</div>
                <div className='handle'>@LambdaSchool</div>
                <div className='date'> 26 Jan</div>
            </div>
            <HeaderContent />
        </div>
    ) 
}

export default HeaderTitle