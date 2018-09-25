import React from 'react';

import './Button.css' ;
  const OuterRow = {
        width: '100%',
    }

    const ButtonStyle =  {
        width: '100%',
        display: 'flex' ,
        justifyContent: 'space-between',
        marginTop: '-5px',
    }

    const ButtonSyleTwo = {
        border: '1.5px solid gray', 
        width: '16%',
        padding: '20px 20px 20px 20px',
        color: 'black',
        textAlign: 'center', 
        fontSize: '4rem',
        fontWeight: 'bolder',
        height: '53px',
    }

    const ButtonStyleThree = {
        color: 'white',
    background: '#A0001E',
    width: '27%',
    border: '2px solid gray',
    fontSize: '5rem',
    }

    const TableFlex = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    }

    const Equals = {
        color: 'white' ,
        background: '#A0001E',
        width: '27%',
        fontSize: '6rem' ,
        border: '2px solid gray' ,
        height: '92px' ,
        textAlign: 'center' ,
    
    
    }

    const RowFive = {
        border: '2px solid gray' ,
        display: 'flex' ,
        flexDirection: 'row' ,
        background: 'white' ,
        marginTop: '-5px' ,
    }

    const RowFiveCont = {
        // style object
        border: '1px solid black' ,
        width: '80%' ,
        height: '92px' ,
        
        color: 'white' ,
        fontSize: '5rem' ,
        textAlign: 'center' ,
        color: 'black' ,
        border: '2px solid gray' ,
        fontWeight: 'bold' ,
    
    }

    
     
    class Nums extends React.Component {

        constructor(){
            super();

            this.state = {
                ButtonStyle: ButtonStyle,
                ButtonSyleTwo: ButtonSyleTwo 
                // style objects passed to state
            }
        }
        
        render(){
            return(
            <div>
<table style={TableFlex}>
<td style={OuterRow}>


    <div className='rowTwoDiv'> 

            <tr style={this.state.ButtonStyle}>
        
            <td style={this.state.ButtonSyleTwo}>7</td>
            

            <td  style={ButtonSyleTwo}>8</td>
        
            <td style={ButtonSyleTwo}>9</td>
        
            <td style={ButtonStyleThree}>x</td>
            
   </tr>
    
    </div>
    
</td>

<td style={OuterRow}>
<div className='rowThreeDiv'>
<tr style={ButtonStyle}>
        
        
            <td style={ButtonSyleTwo}>4</td>
        
            <td style={ButtonSyleTwo} >5</td>
        
            <td style={ButtonSyleTwo}>6</td>
        
            <td style={ButtonStyleThree}>__</td>
    </tr></div>
    

</td>

<td style={OuterRow}>

<div className='rowFourDiv'>
<tr style={ButtonStyle}>
            
            
            <td style={ButtonSyleTwo}>1</td>
            
            <td style={ButtonSyleTwo}>2</td>
            
            <td style={ButtonSyleTwo}>3</td>
            
            <td style={ButtonStyleThree}>+</td>                            
    </tr></div>
   

    </td> 

</table>
<div style={RowFive}> <div style={RowFiveCont}>0</div>

<div style={Equals}>=</div>
</div>
</div>
)
        }
        
}

export default Nums ;
