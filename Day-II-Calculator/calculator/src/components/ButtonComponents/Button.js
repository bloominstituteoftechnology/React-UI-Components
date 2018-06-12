import React from 'react';
import './Button.css';

class NumberButton extends React.Component {
	render(){
		return(
			<div onClick={this.props.onClick} className={this.props.customClass} data-value={this.props.value}>
				{this.props.label}
			</div>
		)	
	}
	
}

export default NumberButton;