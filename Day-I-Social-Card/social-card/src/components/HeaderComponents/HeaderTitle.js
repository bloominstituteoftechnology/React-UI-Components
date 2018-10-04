import React from 'react';
import './Header.css';

const HeaderLargeText = () =>  <h1 className="header-title">Lambda School</h1> 
const HeaderSmallText =() => <p className="header-small-text">@LambdaSchool.26jan</p>
const HeaderParagraph =() => <p className="header-paragraph">Lets learn React by building simple interface components. Try not to overthink it, just keep it simple and have fun. Once you feel comfortable using componentsyou are well on your way to mastering React!</p>


const HeaderTitle = () => {
	return(
		<div className="header-title-main">
		<HeaderLargeText />
		<HeaderSmallText />
		<HeaderParagraph />
		</div>
	);
};


export default HeaderTitle;
