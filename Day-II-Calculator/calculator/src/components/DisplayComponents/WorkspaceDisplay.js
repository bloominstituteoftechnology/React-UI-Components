import React from 'react';

const WorkspaceDisplay = props => {
    return (
        <div className='row workspace'>
            <div className='col'>
                {props.num}
            </div>
        </div>
    );
};

export default WorkspaceDisplay;