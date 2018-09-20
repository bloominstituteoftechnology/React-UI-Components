import React from 'react';
import './Button.css';


const Nums = () => {
return(
<div>
<table>
<td className='r2Outer'>

    <div className='rowTwoDiv'> 

            <tr className='rowTwo'>
        
            <td>7</td>
           
            <td>8</td>
        
            <td>9</td>
        
            <td>x</td>
            
   </tr>
    
    </div>
    
</td>

<td className='r3Outer'>
<div className='rowThreeDiv'>
<tr className='rowThree'>
        
        
            <td>4</td>
        
            <td>5</td>
        
            <td>6</td>
        
            <td>__</td>
    </tr></div>
    

</td>

<td className='r4Outer'>
<div className='rowFourDiv'>
<tr className='rowFour'>
            
            
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