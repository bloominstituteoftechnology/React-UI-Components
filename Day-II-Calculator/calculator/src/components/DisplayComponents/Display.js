import React from 'react';
import '../../less/Display.less';

function DisplayScreen(props) {
    return <React.Fragment>
        <section className="display">
          <h1>{props.input}</h1>
        </section>
      </React.Fragment>;
}

export default DisplayScreen;