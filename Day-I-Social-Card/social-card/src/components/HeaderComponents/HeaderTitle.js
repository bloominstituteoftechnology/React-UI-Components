import React from 'react';
import './Header.css';
// MY CODE BELOW
const HeaderTitle = () => {
    return (
        <div className="header-title">
            <div className="header-title-top">
                <h3>Lambda School</h3>
                <h4>@LambdaSchool</h4>
                {/* ADD JS DATE() */}
                <h4>Jan 31</h4>
            </div> 
            <br/>
            <div className="header-title-text">
                <p>Let's learn React by building simple interfaces with components.  Don't try to overthink it, just keep it simple and have fun.  Once you feel comfortable using components you are well on your way to mastering React!</p>
            </div>
        </div>
    )
} ;
export default HeaderTitle ;