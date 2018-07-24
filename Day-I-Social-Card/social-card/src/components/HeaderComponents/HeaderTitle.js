import React from 'react';
import moment from 'moment';
import './Header.css';

const HeaderTitle = () => {
	return (
		<div className="header-title">
			<h1>Lambda School</h1>
			<h2 className='handle'>@LambdaSchool</h2>
			<h2 className='timestamp'>{moment().format('DD MMM')}</h2>
		</div>
	);
};

export default HeaderTitle;