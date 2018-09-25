import React from 'react';
import './Button.css';


const ClearBtn = {
    width: '80%',
    height: '94px',
    fontSize: '3rem',
    textAlign: 'center',
    borderLeft: '2px solid gray',    
    borderBottom: '2px solid gray',
}

const RowZero = {
    display: 'flex',
    flexDirection: 'row',
}

const DivSignStyle = {
    width: '28%' ,
    background: '#A0001E' ,
    maxHeight: '95px' ,
    fontSize: '6rem' ,
    color: 'white',
    textAlign: 'center',
    border: '2px solid gray' ,
    borderTop: 'none' ,
}


class Clear extends React.Component {
    constructor(){
        super();

        this.setState({
                
        })
    }

    render(){
        return(
        <div style={RowZero}>
            <div style={ClearBtn}>
            Clear
             </div> 
             <div style={DivSignStyle} >÷</div>
            
       
        
        </div>
        );
    }
}
// const Clear = () => {
//     // replace parameters with props arg
//     // render isn't needed 
//     return(
//         // semantic button tags add functionality more simply.
//         // props removes the need for hard coded vanilla html

       
//     )
// }

export default Clear ;
/*
Comparing my ActionButton.js with the solution file, the difference seems to be the use of props as an arg instead of an empty parameter.
The semantic button tag also adds functionality, as a work around for the trickiness of onClick/React event listeners. The render method isn't called because rendering the method here wouldn't allow for the props arg(s) to be passed, as that's done higher up in the file structure, when the components are called in App.js, and App.js is rendered in index.js.



*/