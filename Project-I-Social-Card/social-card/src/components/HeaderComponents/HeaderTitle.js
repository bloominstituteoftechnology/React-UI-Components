import React from 'react';
import './Header.css';

function HeaderTitle() {
    return (
        <div className="head">
            <div className="head-title">
                <h2>Lambda School</h2>
                <a>@LambdaSchool</a>
                <p>27 Feb</p>
            </div>
            <div className="head-content">
            <p>Let's learn React by building simple interfaces
                with components. Don't try to overthink it, just keep
                it simple and have fun. Once you feel comfortable using
                components you are well on your way to mastering React!</p>
            </div>
        </div>
    )
}

export default HeaderTitle;