import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


function HeaderContainer (){
    return(
        <div className='HeaderContainer'>
            <HeaderTitle />
            <HeaderContent />  
        </div>
    )
}


export default HeaderContainer;