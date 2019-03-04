import React from 'react';
import './Button.css';

const StandardButton = props => {
    const { displayProps } = props;

    return (
        <div className='standardButton'>
            {displayProps}
        </div>
    )
}

export default StandardButton; 