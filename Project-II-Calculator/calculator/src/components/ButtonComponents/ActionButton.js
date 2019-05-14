import React from 'react';
import '../../styles/Button.css';
 


// const action = ['/','x','-','+','='];
// const ActionButton = () =>{ 
//     return(
//     <div className = 'actions'>{action.map(e=> {
//         return <div>{e}</div>;
//     })}</div>  ) 
    
// }


const ActionButton = props => {
    

    return (
        <div>
            <button className={props.buttonStyle}>{props.symbol}</button>
        </div>
    )
}


export default ActionButton;