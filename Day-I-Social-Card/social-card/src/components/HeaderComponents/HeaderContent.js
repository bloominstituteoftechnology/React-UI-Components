import React from 'react';
import './Header.css';
import HeaderTitle from "./HeaderTitle";
import ImageThumbnail from "./ImageThumbnail";

const HeaderContent = () => {
return (
<div className="header-content">
<HeaderTitle />
<ImageThumbnail />
</div>);
}

export default HeaderContent;


