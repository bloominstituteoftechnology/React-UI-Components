import React from 'react';
import './Button.css';


//class ActionButton extends React.Component {


    const ActionButton =(props)=>{    
    return(
        <div>
        <button className={props.buttonStyle} onClick={props.click}>{props.text}</button>
       </div>
    );

}



//const ActionButton = (props) => {

//}

export default ActionButton;