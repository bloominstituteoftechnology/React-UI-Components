import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';
function HeaderContainer(){
    return(
        <div class="container">
            <ImageThumbnail src = 'https://ibin.co/3whrpKSBbZ81.png'/>
            <div>
                <HeaderTitle title ='Lambda School'/>
                <HeaderContent text = "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!"/>
            </div>
        </div>
    );
}
export default HeaderContainer;