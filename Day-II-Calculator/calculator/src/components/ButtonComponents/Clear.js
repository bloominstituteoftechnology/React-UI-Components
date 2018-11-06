import React from 'react';
import '../../less/Button.less';

function ClearButton(props) {
    return <React.Fragment>
        <div className="clear" onClick={props.reset}>
          {props.clear}
        </div>
      </React.Fragment>;
}

export default ClearButton;