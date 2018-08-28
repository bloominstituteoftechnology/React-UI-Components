import React from 'react';
import './Button.css';

const ActionBtn = (props) => (

	<div>
		<div className="sybls">{props.syb.divide}</div>
		<div className="sybls">{props.syb.times}</div>
		<div className="sybls">{props.syb.minus}</div>
		<div className="sybls">{props.syb.add}</div>
		<div className="sybls">{props.syb.equals}</div>
	</div>

);

export default ActionBtn;

