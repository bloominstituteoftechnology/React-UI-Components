import React from "react";
import "./Header.css";
import lambdaLogo from "../../images/lambda-logo.jpg";

const ImageThumbnail = () => {
  return (
    <div className="header__thumbnail">
      <img src={lambdaLogo} alt="Header thumbnail" />
    </div>
  );
};

export default ImageThumbnail;
