import React from "react";
import HeaderContent from "./HeaderContent";
import HeaderTitle from "./HeaderTitle";
import ImageThumbnail from "./ImageThumbnail";
import "./Header.css";

function HeaderContainer() {
  return (
    <div className="HeaderContainer">
      <ImageThumbnail />
      <HeaderTitle />
      <HeaderContent />
    </div>
  );
}

export default HeaderContainer;

//   const rootElement = document.getElementById('root');
//   ReactDOM.render(<App />, rootElement);
