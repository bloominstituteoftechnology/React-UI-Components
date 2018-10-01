import React from 'react';
import ImageThumbNail from './ImageThumbnail';


const HeaderContainer = () =>{
    return(
        <div className="header-container">
           <div className="image-column">
            <ImageThumbNail src={"https://ibin.co/3whrpKSBbZ81.png "}/>
           </div>

          
            <div className="header-content-column">
            
            </div>
        </div>
    );
}

export default HeaderContainer;