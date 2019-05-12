import React from 'react';
import './Header.css';


const HeaderTitle = () => {
	return (
		<div
			style={{
				display: 'flex',
				margin: '5px',
				alignItems: 'baseline',
				width: '300px',
				justifyContent: 'space-between',
			}}>
			<h4>Lambda School</h4>
			<span>@lambdaSchool</span>
			<span>26 jan</span>
		</div>
	);
};

export default HeaderTitle;
