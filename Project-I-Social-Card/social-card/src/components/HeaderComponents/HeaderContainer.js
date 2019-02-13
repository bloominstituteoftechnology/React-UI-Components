import React from "react";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";
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
