import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component {
	
	render(){
		let string = '';
		let value = this.props.data.map((operation, i)=> {
			return string += operation; 
		});
		if(this.props.result) {
			string = this.props.result;
		}
		
		return(
			<div className={this.props.customClass} >
				{string}
			</div>
		)
	}
	
}

export default CalculatorDisplay;