import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

function HeaderContent(){
    return(
        <div>
            <HeaderTitle />
            <div> 
                <p>Let's learn React by building simple interfaces with components. Don't try to overthink it, jsut keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
            </div>
        </div>
    );
}

export default HeaderContent;