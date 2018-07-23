import React from 'react';
import './Header.css';


const HeaderTitle = () => {
    return (
        <div className = "header-title"> 
            <div className = "top-header-title">
                <h1>Lambda School</h1>
                <h2> @LambdaSchool   &middot; 11 June </h2>
            </div>
            <div className = "bottom-header-title">
                Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!
            </div>
        </div>
    );
};

export default HeaderTitle;