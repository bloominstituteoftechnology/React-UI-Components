import React from 'react';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';


const ButtonContainer = () => {
        
    const symbol=['7','8','9','x'];
    const roww=['4','5','6','-'];
    const secondLast=['1','2','3','+'];
    
    
  return (
      <div className="mainContainer">
      
      <div className="zeroDisplay">
      
            <NumberButton numberTest="0"/>
      
      </div>
      
      <div className="firstRow">
            <NumberButton numberTest="clear"/>
            <NumberButton numberTest="%"/>
      </div>
      
      <div className="secondRow">
      
        {symbol.map(logo=>{
               return <ActionButton symbol={logo}/>     
        }) 
        }

        </div>
      
       <div className="thirdRow">
            {secondLast.map(values=>{
             return <NumberButton numberTest={values}/>
            })
           
       }
        </div>

        <div className="fourthRow">
            <NumberButton numberTest="0"/>
                <NumberButton numberTest="="/>

        </div>
      </div>
  )
}

export default ButtonContainer;