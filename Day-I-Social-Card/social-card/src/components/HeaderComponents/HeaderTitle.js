import React from 'react';
import './Header.css';

const HeaderTitle = (props) =>{

    return (
        <div className="header-title">
            <h1>Lambda School <span>&copy;LambdaSchool &sdot; 26 jan</span></h1>
            <p>Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun.  Once you feel comfortable using components you are well on your way to mastering React!</p>
        </div>

    )

}

export default HeaderTitle;