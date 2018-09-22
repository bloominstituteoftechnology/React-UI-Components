import React from 'react';
import './Button.css';
import SquareButton from './SquareButton';

const ActionButton = () => {
    return (
        <div className='actionBar'>
            <SquareButton type = 'square action' action = '	&#247;' />
            <SquareButton type = 'square action' action = '	&#215;' />
            <SquareButton type = 'square action' action = '	&#8722;' />
            <SquareButton type = 'square action' action = '	&#43;' />
            <SquareButton type = 'square action' action = '	&#61;' />
        </div>
    );
};

export default ActionButton;