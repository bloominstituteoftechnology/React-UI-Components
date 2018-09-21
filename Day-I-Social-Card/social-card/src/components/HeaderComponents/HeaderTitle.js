import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className="headertitle">
            <div className="headerparagraph1">
                <h1> Lambda School </h1>
                <p>@LambdaSchool • 26 jan</p>
            </div>
            <div className="headerparagraph2">
                <p>Let's learn React by building simple interfaces with components.
                    Don't try to overthink it, just keep it simple and have fun. 
                    Once you feel comfortable using components you are well on your way
                    to mastering React! Yay.
                </p>
            </div>
        </div>
        
    )
}

export default HeaderTitle;