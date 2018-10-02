import React from 'react';
import ActionButtons from './ActionButton';
import NumberButtons from './NumberButton';

const Buttons = (props) => {
    return (
        <div className='buttonsContainer'>
            <div className='actionButtonsContainer'>
                <ActionButtons buttonType={'÷'}/>
                <ActionButtons buttonType={'×'}/>
                <ActionButtons buttonType={'−'}/>
                <ActionButtons buttonType={'+'}/>
                <ActionButtons buttonType={'='}/>
            </div>
            <div className='numberButtonsContainer'>
                <NumberButtons buttonNumber={'clear'}/>
            </div>
        </div>
    );
}

export default Buttons;