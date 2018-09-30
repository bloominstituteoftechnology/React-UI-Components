import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = (props) => {
    return (
        <div className="headerContainer">
            <HeaderTitle name="Lambda School" handle="LambdaSchool" date="26 jan"/>
            
            <HeaderContent text="Let's learn React by building simple interfaces with components.
                Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable&nbsp;
                using components you are well on your way to mastering React!" />
        </div>
    );
}

export default HeaderContainer;
