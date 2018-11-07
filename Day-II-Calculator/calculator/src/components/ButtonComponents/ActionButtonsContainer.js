import React from 'react';
import ActionButton from './ActionButton';

function ActionButtonsContainer() {
  return (
    <div className="calc-actions-container">
    	<ActionButton label='÷'/>
    	<ActionButton label='×'/>
    	<ActionButton label='−'/>
    	<ActionButton label='+'/>
    	<ActionButton label='='/>
    	<ActionButton label='Clear'/>
    </div>
  );
}

export default ActionButtonsContainer;