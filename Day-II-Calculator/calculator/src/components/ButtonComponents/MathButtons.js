import React from 'react';
import './Button.css';

const MathButton = (props)=> {
    return (
        <div className='mathbtns'>
        <div className='mathbtn'>
           <h2 className='mathbtntext'>÷</h2>
            <div className='bottombtns'>
                <h2 className='mathbtntext'>x</h2>
                <h2 className='mathbtntext'>-</h2>
                <h2 className='mathbtntext'>+</h2>
                <h2 className='mathbtntext'>=</h2>
           </div>
        </div>
        </div>
    );
}

export default MathButton;