import React from 'react';
import './Header.css';

const HeaderTitle = () => {
	return (
		<div className="title">
			<div className="header-text">Lambda School</div>
			<div className="header-handle">@LambdaSchool</div>
			<div className="bullet-symbol">&bull;</div>
			<div className="header-timestamp">27 aug</div>
		</div>
	);
};

export default HeaderTitle;
