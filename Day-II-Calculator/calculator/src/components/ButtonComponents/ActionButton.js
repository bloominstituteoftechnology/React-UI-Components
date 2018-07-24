import React from 'react';
import './Button.css';


class ActionButton extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }


    render() {
       return (
             <div className = "operators">
                <div className="operation"><i class="fas fa-divide"></i></div>
                 
                <div className="operation"><i class="fas fa-times"></i></div>
                 
                <div className="operation"><i class="fas fa-minus"></i></div>
                 
                <div className="operation"><i class="fas fa-plus"></i></div>
                 
                <div className="operation"><i class="fas fa-equals"></i></div>
                 
             </div>
        ); 
    }
}


export default ActionButton; 