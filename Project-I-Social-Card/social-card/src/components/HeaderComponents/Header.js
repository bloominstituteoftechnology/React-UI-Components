import React from "react";

import HeaderContainer from "./HeaderContainer";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

import "./Header.css";

const Header = ({
  children,
  headerTitle,
  headerSubtitle,
  headerContent,
  thumbnailImage
}) => {
  return (
    <HeaderContainer headerContainerStyles={outerContainerStyles}>
      <ImageThumbnail
        thumbnailImage={thumbnailImage}
        imageAlt="Lambda School Logo"
      />
      <HeaderContainer headerContainerStyles={innerContainerStyles}>
        <HeaderTitle
          headerTitle={headerTitle}
          headerSubtitle={headerSubtitle}
        />
        <HeaderContent headerContent={headerContent} />
      </HeaderContainer>
    </HeaderContainer>
  );
};

const outerContainerStyles = {
  display: "flex",
  flexDirection: "row",
  width: "fit-content"
};

const innerContainerStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start"
};

export default Header;
