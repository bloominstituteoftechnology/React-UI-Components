import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <header>
            <h1>Lambda School</h1>
            <a href="#">@LambdaSchool · 26 jan</a>
            <p>Let's Learn React by building simple interfaces with components.
             Don't try to overthink it, just keep it simple and fun.
             Once you feel comfortable using components you are well on your way to mastering React</p>
        </header>
    );
}

export default HeaderTitle;