import React from "react";
import OperatorButton from "../ButtonComponents/OperatorButton";

const OperatorPad = props => {
  let operatorButtons = props.operators.operators.map(function(item) {
    return (
      <div key={item} class="operatorButtonContainer" id={item}>
        <OperatorButton value={item} />
      </div>
    );
  });

  return (
    <div className="operatorPad">
        {operatorButtons}
    </div>
  );
};

export default OperatorPad;
