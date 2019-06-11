import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ButtonContainer = (props) => {
    
    const numberValues=['clear',9,8,7,6,5,4,3,2,1,0];
    const ActionNumbers=["%","X","-","+","="];
    
    
    return(
        <div className="Buttons">
            <div className="Keys">
                { numberValues.map(value=> <NumberButton text={value} />)
                }
            </div>
            
            <div className="KeysTwo">
                 { ActionNumbers.map(value=> <ActionButton actionBtn={value} />)
                }
            </div>
        
        
        </div>
    )
}
export default ButtonContainer;