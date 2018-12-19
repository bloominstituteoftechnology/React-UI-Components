import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";

const styles ={
    display:"flex",

}

const HeaderContent = ()=>{
    return (
        <div style={styles}>
                <ImageThumbnail />
                <HeaderTitle />
        </div>
    )
}

export default HeaderContent;