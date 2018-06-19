import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className='header-title'>
            <div className='title'>Lambda School</div>
            <span className='username-date'>@LambdaSchool . 26 jan</span>
            <p>Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
        </div>
    );
};
 
export default HeaderTitle;