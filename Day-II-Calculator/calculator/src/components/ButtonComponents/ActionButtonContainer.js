import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import LongActionButton from './LongActionButton';

const ActionButtonContainer = () => {
    return (
      <div>
        <LongActionButton text="clear"/>
        <ActionButton text="/"/>
        <ActionButton text="*"/>
        <ActionButton text="-"/>
        <ActionButton text="+"/>
        <ActionButton text="="/>
      </div>
    );
};

export default ActionButtonContainer;