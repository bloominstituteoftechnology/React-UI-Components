import React from 'react';
import './Header.css';

function HeaderContent() {
    return (
        <div className='headerContent'>
            <div className='title'>Lambda School <span>@LambdaSchool 26 Jan</span></div>
            <div className='content'>Let's learn React by building simple interfaces with components.  
                Don't try to overthink it, just keep it simple and have fun.  Once 
                you feel comfortable using components you are well on your way to 
                mastering React!.
            </div>
        </div>
    );
};

export default HeaderContent;