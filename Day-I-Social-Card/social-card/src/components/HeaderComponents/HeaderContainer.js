import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const content = `Let's learn react`
function HeaderContainer (props){
    return <div class="headerContainer">
        <ImageThumbnail url="https://ibin.co/3whrpKSBbZ81.png" alt="lambdaLogo"/>
        <div class="headerUserContent">
            <HeaderTitle title="Lambda School" userName="@LambdaSchool" timeStamp="26 jan"/>
            <HeaderContent text={content}/>
        </div>
    </div>
}

export default HeaderContainer