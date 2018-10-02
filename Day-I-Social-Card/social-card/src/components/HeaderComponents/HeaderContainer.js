import React from 'react';
import ImageThumbNail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';


const HeaderContainer = () =>{
    return(
        <div className="header-container">
            <div className="image-column">
                <ImageThumbNail src={"https://ibin.co/3whrpKSBbZ81.png"}/>
            </div>
            <div className="header-content-column">
                <HeaderTitle headerTitle="Lambda School" titleDate="@LambdaSchool · 1 Oct"/>
                <HeaderContent headerDescription="
                Let's Learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!.
                
                " />
            </div>
        </div>
    );
}

export default HeaderContainer;