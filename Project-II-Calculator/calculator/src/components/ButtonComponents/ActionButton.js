import React from 'react';
import './Button.css';

const ActionButton = props => {
    const {mathButtonTextPROPS } = props;
    return (
        <div className='actionButton'>
            <p>
                {mathButtonTextPROPS}
            </p>
        </div>
    )
}

export default ActionButton; 