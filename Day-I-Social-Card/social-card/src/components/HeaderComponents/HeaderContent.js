import React from 'react';
import './Header.css';

const HeaderContent = () => {
    return (
    <div className ='text'>
        <p className='lambda-school'>Lambda School <span className='gray-lambda'>@LambdaSchool · 26 jan</span></p>
        <p>
            Let's learn React by building simple interfaces with components. 
            Don't try to overthink it, just keep it simple and have fun. Once 
            you feel comfortable using components you are well on your way to 
            mastering React.
        </p>
    </div>
    );
}

export default HeaderContent;