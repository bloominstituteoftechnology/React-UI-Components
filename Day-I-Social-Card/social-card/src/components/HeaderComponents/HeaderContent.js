import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";

function HeaderContent(props) {
    return (
        <div className="HeaderContent">
        <ImageThumbnail /> 
        <HeaderTitle title="Lambda School" />
        <HeaderTitle handle = "@LambdaSchool 26 Jan"/>
         </div>   )
};

export default HeaderContent;
