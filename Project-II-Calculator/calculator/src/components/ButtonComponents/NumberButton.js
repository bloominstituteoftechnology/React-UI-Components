import React from 'react';
import './Button.css';

function NumberButton(props) {
    return (
        <div className='NumberButton'>
            <div>
                <p className="Nums">{props.num}</p>
            </div>

        </div>
    );
}



export default NumberButton;