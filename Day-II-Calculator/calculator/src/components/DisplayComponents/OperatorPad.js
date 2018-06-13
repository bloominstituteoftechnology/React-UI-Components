import React from "react";
import OperatorButton from "../ButtonComponents/OperatorButton";

const OperatorPad = props => {
  let operatorButtons = props.operators.map(function(item) {
    return (
      <div key={item.name} className="operatorButtonContainer" id={item.name}>
        <OperatorButton value={item.name} />
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
