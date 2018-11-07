import React from 'react';
import './Button.css';

// Components
import ActionButton from './ActionButton';
import ClearButton from './ClearButton';

// Data
const operators = [
    {
        class: 'fas fa-divide'
    },
    {
        class: 'fas fa-times'
    },
    {
        class: 'fas fa-minus'
    },
    {
        class: 'fas fa-plus'
    },
    {
        class: 'fas fa-equals'
    }
]

const numbers = [
    {
        value: 1
    },
    {
        value: 2
    },
    {
        value: 3
    },
    {
        value: 4
    },
    {
        value: 5
    },
    {
        value: 6
    },
    {
        value: 7
    },
    {
        value: 8
    },
    {
        value: 9
    },
    {
        value: 0
    }
]


const ButtonContainer = props => {
    return (
        <div className='button-container'>
            <ClearButton text='AC' />
            <div className='actions'>
                {
                    operators.map(operator => <ActionButton operator={operator} />)
                }
            </div>
        </div>
    )
}

export default ButtonContainer;