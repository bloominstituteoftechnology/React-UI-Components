import React from 'react';
import '../../less/Button.less';

function NumberButtons(props) {
    return (
        <React.Fragment>
            <section className="numbers">
                <h1>{props.button} </h1>
            </section>
        </React.Fragment>
    );
}

export default NumberButtons;