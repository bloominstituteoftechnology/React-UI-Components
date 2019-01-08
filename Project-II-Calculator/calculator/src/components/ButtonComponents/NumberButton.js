import React from 'react';
import './Button.css';



// function numbersArea() {
//     return (
//         <div className="numbersArea">
//             <button class = "clearButton">{clearButton.name}</button>

//         </div>
//     )
// }

// const Style = styled.button `
// background: ${props => props.buttonStyle}red;

// `




function numbersArea (props){

    const { name } = props.text;

    return (
        

        <button className={props.className}>{props.text.name}</button>
        
       
    )
}

export default numbersArea 