import React from 'react';
import './Button.css';


class ActionButton extends React.Component {
    constructor(props){
        super(props)
        this.state =  {divide: "/", multiply: "*", plus: "+", minus: "-"}
        console.log(props);
    }


    

    render() {
       return (
             <div className = "operators">
                <div onClick={ () => this.props.handleButtonClick(this.state.divide)} className="operation"><i className="fas fa-divide"></i></div>
                 
                <div onClick={ () => this.props.handleButtonClick(this.state.multiply)} className="operation"><i className="fas fa-times"></i></div>
                 
                <div onClick={ () => this.props.handleButtonClick(this.state.minus)} className="operation"><i className="fas fa-minus"></i></div>
                 
                <div onClick={ () => this.props.handleButtonClick(this.state.plus)} className="operation"><i className="fas fa-plus"></i></div>
                 
                <div onClick={this.props.handleEqualClick} className="operation"><i className="fas fa-equals"></i></div>
                
             </div>
        ); 
    }
}


export default ActionButton; 