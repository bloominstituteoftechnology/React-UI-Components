import React from 'react';
import './Header.css';

function ImageThumbnail (props){
    return <div class="headerImg"><img src={props.url} alt={props.alt}/></div>
}

export default ImageThumbnail;