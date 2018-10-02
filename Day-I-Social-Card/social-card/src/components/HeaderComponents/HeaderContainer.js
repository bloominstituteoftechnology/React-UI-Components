import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle'; 
import ImageThumbnail from './ImageThumbnail'


const heading = () => {
    return(
        <div class="container-header">
        <ImageThumbnail />
        <HeaderTitle />
        <HeaderContent />
        </div>
    )
}
export default heading;