import React from "react";
import "./Header.css";
import moment from "moment";

const HeaderTitle = () => {
	return (
		<div className='header__title'>
			<span className='header__title--bold'> Lambda School </span>
			<span className='header__title--grey'>@LambdaSchool · { moment().format("D MMM").toLowerCase() }</span>
		</div>
	);
};

export default HeaderTitle;
