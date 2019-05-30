import React from 'react';
import './Header.css';

const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
const today = new Date();

let mm = monthNames[today.getMonth()];
let dd = today.getDate();

function HeaderTitle() {
	return (
		<p className="header-title-container">
			<div className="header-title"> Lambda School </div> <div className="header-title-handle"> @LambdaSchool   {mm + dd} </div>
		</p>
	);
}
export default HeaderTitle;
