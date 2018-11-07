import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OperatorButtons = props => {
    return (
        <>
            <button className="operator-buttons" value={props.text}>
                <FontAwesomeIcon icon={props.text} />
            </button>
        </>
    );
};

export default OperatorButtons;
