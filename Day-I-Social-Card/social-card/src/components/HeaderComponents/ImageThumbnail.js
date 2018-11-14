import React from 'react';
import './Header.css';
import '../../App.css';

// function ImageThumbnail() {
//     return (
//       <React.Fragment>
//         <img src='https://ibin.co/3whrpKSBbZ81.png' alt="lambda Thumbnail" className='header-img'/>
//       </React.Fragment>
//     );
//   }

  const ImageThumbnail = () => {
    return (
      <div className="thumb-wrapper">
        <img
          alt="lambda logo"
          className="thumb-img"
          src="https://ibin.co/3whrpKSBbZ81.png"
        />
      </div>
    );
  };


export default ImageThumbnail;
