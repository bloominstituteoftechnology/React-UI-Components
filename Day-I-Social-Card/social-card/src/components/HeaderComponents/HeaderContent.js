import React from 'react';
import './Header.css';

const HeaderContent = (props) => {
    return (
        <div className="headerContent">
            <div className="title">
                <span className="bold">Lambda School</span>
                <span className="lightGrey">@LambdaSchool - 26 jan</span>
            </div>
            <p>
               Let's learn React by building simple interfaces with components.  Don't try to overthink it, just keep it simple and have fun.  Once you feel comfortable using components you are well on your way to mastering React!
            </p>
        </div>
    );
};

export default HeaderContent;