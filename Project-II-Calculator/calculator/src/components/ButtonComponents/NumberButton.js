import React from 'react';
import './Button.css';
const NumberButton = (props) => {
    return (
        <button onClick={props.handleClick} className={props.bgcolor}>
            {props.name}
        </button>
    );
}



// class NumberButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.props = props;

//     }
//     render() {
//         return (
//             <button onClick={this.props.handleClick} className={this.props.bgcolor}>
//                 {this.props.name}
//             </button>
//         );
//     }
// }

export default NumberButton;