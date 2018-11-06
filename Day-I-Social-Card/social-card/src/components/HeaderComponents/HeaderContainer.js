import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderText from "./HeaderText"

const HeaderContainer = () => {
	return (
		<div className="headerContainer">
			<ImageThumbnail />
			<HeaderText />
		</div>
	);
};

export default HeaderContainer;
