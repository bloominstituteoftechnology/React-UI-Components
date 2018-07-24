import React from 'react';
import './Button.css';


class ActionButton extends React.Component {
    // constructor(props){
    //     super(props)
        
    // }


    render() {
       return (
             <div className = "operators">
                <div className="operation"><i className="fas fa-divide"></i></div>
                 
                <div className="operation"><i className="fas fa-times"></i></div>
                 
                <div className="operation"><i className="fas fa-minus"></i></div>
                 
                <div className="operation"><i className="fas fa-plus"></i></div>
                 
                <div className="operation"><i className="fas fa-equals"></i></div>
                 
             </div>
        ); 
    }
}


export default ActionButton; 