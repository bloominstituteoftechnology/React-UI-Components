import React from 'react';
import './Button.css';


export default function NumberButton({content, large, updateDisplay}) {
    return (
        (large)
            ? <div className="btn large" onClick={e => updateDisplay(e)}>
                  {content}
              </div> 
            : <div className="btn" onClick={updateDisplay}>
                  {content}
            </div>
    )
}