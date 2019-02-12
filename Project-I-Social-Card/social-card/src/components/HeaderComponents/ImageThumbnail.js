import React from 'react';
import './Header.css';

const source = "https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"
const ImageThumbnail =()=>{
    return (
        
        <div>
            <img style={{width:"100%"}}src={source}/>
        </div>
    )
}

export default ImageThumbnail;