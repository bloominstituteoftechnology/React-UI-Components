import React from 'react';
import './Header.css';
const style={    
    filter:"invert(100%)",   
    border:"1px solid black",
};
function ImageThumbnail() {
    return (
    <div >
     <img style={style} src ="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" alt=""></img>
    </div>)
}

export default ImageThumbnail;