import React from 'react';
import './App.css';
import {FlexColumn, FlexRow} from "./components/Elements/Flex";
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
      <FlexColumn alignEnd width="500px" padding={50}>
          <CalculatorDisplay/>

          <FlexRow width="full">
              <NumberButton grow>clear</NumberButton>
              <ActionButton>÷</ActionButton>
          </FlexRow>

          <FlexRow width="full">
              <NumberButton bold>7</NumberButton>
              <NumberButton bold>8</NumberButton>
              <NumberButton bold>9</NumberButton>
              <ActionButton>x</ActionButton>
          </FlexRow>

          <FlexRow width="full">
              <NumberButton bold>4</NumberButton>
              <NumberButton bold>5</NumberButton>
              <NumberButton bold>6</NumberButton>
              <ActionButton>-</ActionButton>
          </FlexRow>

          <FlexRow width="full">
              <NumberButton bold>1</NumberButton>
              <NumberButton bold>2</NumberButton>
              <NumberButton bold>3</NumberButton>
              <ActionButton>+</ActionButton>
          </FlexRow>

          <FlexRow width="full">
              <NumberButton grow bold>0</NumberButton>
              <ActionButton>=</ActionButton>
          </FlexRow>
      </FlexColumn>
  );
};

export default App;
