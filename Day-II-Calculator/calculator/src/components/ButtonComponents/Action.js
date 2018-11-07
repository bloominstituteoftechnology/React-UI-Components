import React from 'react';
import '../../less/Button.less';

function ActionButtons(props) {
    return (
        <React.Fragment>
            <section className="action">
                <h1>{props.button} </h1>
            </section>
        </React.Fragment>
    );
}

export default ActionButtons;