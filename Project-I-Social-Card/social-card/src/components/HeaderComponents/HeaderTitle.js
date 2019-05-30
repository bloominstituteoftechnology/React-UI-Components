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
		<h1>
			<div> Lambda School </div> <div> @LambdaSchool {mm + dd} </div>
		</h1>
	);
}
export default HeaderTitle;
