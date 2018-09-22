import React from 'react';
import './Button.css';


class ActionButton extends React.Component {
    render(){    
    return(
        <div>
        <button className={this.props.buttonStyle}>{this.props.text}</button>
       </div>
    )

}
}


//const ActionButton = (props) => {

//}

export default ActionButton;