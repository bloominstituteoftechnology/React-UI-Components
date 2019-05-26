import React from 'react';

import './Header.css';
import { ImageThumbnail } from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = props => {
    return (
        <div className="header-wrapper">
            <ImageThumbnail lambdaLogo={props.lambdaLogo}/>
            <div className="header-title-content">
                <HeaderTitle 
                    title="Lambda School" twitter="@LambdaSchool"
                    date={props.retrieveDate}/>
                <HeaderContent 
                    content="Let's learn React by building simple interfaces with components. Don't overthink it, just keep it simple and have fun. Once you feel comfortable with components you are well on your way to mastering React!"/>
            </div>
        </div>
    )
}

export default HeaderContainer;