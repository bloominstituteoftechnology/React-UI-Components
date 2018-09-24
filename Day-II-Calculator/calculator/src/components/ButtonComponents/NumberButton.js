import React from 'react';
import './Button.css';

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
        border: '2px solid gray', 
        width: '17%',
        padding: '20px 20px 20px 20px',
        color: 'black',
        textAlign: 'center', 
        fontSize: '4rem',
        fontWeight: 'bolder',
        height: '53px',
    }

const Nums = (props) => {

  
return(
<div>
<table>
{/* <td className='r2Outer'> */}
<td style={OuterRow}>


    <div className='rowTwoDiv'> 

            <tr style={ButtonStyle}{...ButtonSyleTwo}>
        
            <td>7</td>
           
            <td>8</td>
        
            <td>9</td>
        
            <td>x</td>
            
   </tr>
    
    </div>
    
</td>

{/* <td className='r3Outer'> */}
<td style={OuterRow}>
<div className='rowThreeDiv'>
<tr style={ButtonStyle}>
        
        
            <td>4</td>
        
            <td>5</td>
        
            <td>6</td>
        
            <td>__</td>
    </tr></div>
    

</td>

{/* <td className='r4Outer'> */}
<td style={OuterRow}>

<div className='rowFourDiv'>
<tr style={ButtonStyle}>
            
            
            <td>1</td>
            
            <td>2</td>
            
            <td>3</td>
            
            <td>+</td>                            
    </tr></div>
   

    </td> 

</table>
<div className="rowFive"> <div className="rowFiveCont">0</div>

<div className='equals'>=</div>
</div>
</div>
)
}

export default Nums ;