import React from "react";
import "./Header.css";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const HeaderText = () => {
	return (
		<div className="header__text">
			<HeaderTitle />
			<HeaderContent />
		</div>
	);
};

export default HeaderText;