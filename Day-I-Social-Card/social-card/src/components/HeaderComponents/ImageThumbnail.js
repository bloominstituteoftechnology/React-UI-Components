import React from "react";
import "./Header.css";

function ImageThumbnail(props) {
  return (
    <React.Fragment>
      <img className="Header_ImageThumbnail" src={props.src} />
    </React.Fragment>
  );
}

export default ImageThumbnail;
