import React from 'react';
import './less/App.less';

import DisplayScreen from './components/DisplayComponents/Display';
import ActionButtons from './components/ButtonComponents/Action';
import NumberButtons from './components/ButtonComponents/Numbers';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ['\u00F7', 'x', '-', '+', '='];

const App = () => {
  return (
    <React.Fragment>
      <main>
        <DisplayScreen />
        <section className="buttons">
          <div className="left">
            <div>clear</div>
            {numbers.map(button => (
              <NumberButtons button={button} />
            ))}
            <div>0</div>
          </div>
          <div className="right">
            {operators.map(button => (
              <ActionButtons button={button} />
            ))}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default App;
