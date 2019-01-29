import React from 'react';
import "./Status.css";

const Status = (props) => {
    return (
        <div className="status-wrapper">
            {props.status}
        </div>
    );
};

export default Status;