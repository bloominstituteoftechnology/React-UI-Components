import React from 'react';
import "./SideIcon.css";

const SideIcon = (props) => {
    return (
        <div>
            <img className="lambda-logo" src={props.src} alt="lambda-logo"/>
        </div>
    );
};

export default SideIcon;