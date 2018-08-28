import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
    const date = moment().format("DD MMM").toLocaleLowerCase();
    return (
        <div className="header-title-div">
            <span className="title">Lambda School</span> <span className="handle">@LambdaSchool &#8901; {date}</span>
            <p>Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
        </div>
    )
};

export default HeaderTitle;
