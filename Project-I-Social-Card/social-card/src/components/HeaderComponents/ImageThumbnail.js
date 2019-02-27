import React from "react";
import "./Header.css";

const ImageThumbnail = ({ thumbnailImage, imageAlt }) => {
  return (
    <div className="thumbtainer">
      <img className="headerThumbnail" src={thumbnailImage} alt={imageAlt} />
    </div>
  );
};

export default ImageThumbnail;
