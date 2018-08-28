import React from 'react';
import './Button.css';

const NumberBrn = (props) => (
	<div className="num-container">
		<div className="clear">{props.nums.clear}</div>
		<div className="flexNum">
			<div><div className="btn">{props.nums.seven}</div><div className="btn">{props.nums.eight}</div><div className="btn">{props.nums.nine}</div></div>
			<div><div className="btn">{props.nums.four}</div><div className="btn">{props.nums.five}</div><div className="btn">{props.nums.six}</div></div>
			<div><div className="btn">{props.nums.one}</div><div className="btn">{props.nums.two}</div><div className="btn">{props.nums.three}</div></div>
		</div>
		<div className="zero">{props.nums.zero}</div>
	</div>
);




export default NumberBrn;
