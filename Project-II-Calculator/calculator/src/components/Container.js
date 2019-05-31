import React from 'react';
import "./Container.css";
import NumberButtons from "./ButtonComponents/NumberButton";
import ActionButtons from "./ButtonComponents/ActionButton";

const Container = () => {
    return (
    <div className="container">
        <NumberButtons />
        <ActionButtons />
    </div>
    );
}

export default Container;