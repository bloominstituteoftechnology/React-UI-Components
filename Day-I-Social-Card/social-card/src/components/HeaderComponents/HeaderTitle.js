import React from 'react';
import './Header.css';

const HeaderTitle = () => {
	return (
		<div className="header-title">
        <h4>Lambda School <span className="Banner__greyText">@LambdaSchool ♦ 26 Jan</span></h4>
     <div className= "header-content">
				<p className="header-content-wrapper">
					Let's Learn React from Simple Interfaces with Components. Don't try to overthink, just keep it simple and have fun. Once you feel comfortable using components you are well on your way mastering React.
				</p>
		</div>
     </div>
	)
}

export default HeaderTitle;
