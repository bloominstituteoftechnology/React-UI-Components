import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle'


const HeaderContent = () =>{
    return(
        <div className = 'header-content'>
            <HeaderTitle />
            <p>Let's learn React. It should be a super duper dope time for all of us! Hooooooray!!!</p>
        </div>
    )
}
export default HeaderContent;