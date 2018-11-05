import React from "react";
import ImageThumbnail from "./ImageThumbnail.js";
import HeaderTitle from "./HeaderTitle.js";
import "./Header.css";

function HeaderContainer() {
  return (
    <section className="headerContainer">
      <ImageThumbnail />
      <HeaderTitle />
    </section>
  );
}

export default HeaderContainer;
