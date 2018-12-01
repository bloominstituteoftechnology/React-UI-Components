import React from 'react';
// import './Button.css';


const ActionButton = props => {
    return (
        <div className={props.className}>
            {props.text}
        </div>
    );
};

// class ActionButton extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {}
//     }

//     render() {
//         return (
//             <div className={this.state.className}>
//                        {this.state.text}
//             </div>
//         )
//     }
// }


export default ActionButton;