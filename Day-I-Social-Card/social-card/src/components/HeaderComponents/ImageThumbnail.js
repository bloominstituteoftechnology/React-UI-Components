import React from 'react';
import './Header.css';

const ImageThumbnail = props => { // props = { type: "primary"}

    return (
      <div> 
        <img class = 'logo' src="https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg" alt="Lambda Twitter Logo"/>
      </div>
    );
}

export default ImageThumbnail;