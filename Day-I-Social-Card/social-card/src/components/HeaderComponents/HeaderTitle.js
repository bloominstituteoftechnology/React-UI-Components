import React from 'react';
import './Header.css';


const HeaderTitle = () => {

    return ( 
        <div className="header-title">
            <h1>Lambda School</h1>
            <p className="mini-txt">@LambdaSchool</p>
            <div className="mini-txt"> · 26 jan</div>
        </div>
    );
}

export default HeaderTitle;

/* 
- Create a `<HeaderTitle />` component that displays the Lambda School header text, 
@LambdaSchool handle and timestamp.

<p>Let's learn React by building simple interfaces with components.
                Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!
            </p>
*/