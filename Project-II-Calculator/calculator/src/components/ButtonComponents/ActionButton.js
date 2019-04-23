import React from 'react';
import './Button.css';


export default function ActionButton({content, large, updateDisplay}) {
    return (
        (large)
            ? <div className="btn action large" onClick={updateDisplay}>
                    {content}
              </div> 
            : <div className="btn action" onClick={updateDisplay}>
                    {content}
              </div>
    )
}