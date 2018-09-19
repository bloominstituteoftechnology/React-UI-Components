import React from 'react';
import './Header.css';
import lambdaSchool from '../images/lambdaSchool.png';
const ImageThumbnail = () => {
    return (
       <div className = 'user-img'>
         <img src ={lambdaSchool} />
            {/* <i class="far fa-comment"></i> */}
        </div>
     
    )
}
export default ImageThumbnail;