import React from 'react';
import './Display.css';

import ActionButton from '../ButtonComponents/ActionButton';




const ActionGroup = () => {
    return (
     <div class="action-group">

          <ActionButton name="÷"/>
          <ActionButton name="X"/>
          <ActionButton name="–"/>
          <ActionButton name="+"/>
          <ActionButton name="="/>

      </div>
    )
};


export default ActionGroup;
