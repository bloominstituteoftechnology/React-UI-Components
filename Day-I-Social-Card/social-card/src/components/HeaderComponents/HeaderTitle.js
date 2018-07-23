import React from "react";
import "./Header.css";

const HeaderTitle = () => {
	return (
		<div className='headerTitleContainer'>
			<span> Lambda School </span>
			<span className="header__title--grey"> @LambdaSchool * 23 jul</span>
		</div>
	);
};

export default HeaderTitle;
