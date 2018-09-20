import React from 'react';
import './Header.css';
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";
import ImageThumbnail from "./ImageThumbnail";

const HeaderContainer = () => (
    <div className="header-container">
        <ImageThumbnail image="https://ibin.co/3whrpKSBbZ81.png" />
        <HeaderTitle title="Lambda School" handle="LambdaSchool" timestamp="26 jan" />
        <HeaderContent text="Let's learn React by building simple interfaces with components. Don't try to overthinnk it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!" />
    </div>
);

export default HeaderContainer;