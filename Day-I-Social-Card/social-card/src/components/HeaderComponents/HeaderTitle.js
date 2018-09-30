import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
	return (
		<div className="headerTitle">
			<p><strong>Lambda School</strong> <small className="date">@LambdaSchool {moment().format('MMMM Do YYYY')}</small></p>
		</div>
	);
}

export default HeaderTitle;