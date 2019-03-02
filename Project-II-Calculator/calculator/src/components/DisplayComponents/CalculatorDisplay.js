import React from 'react';
import './Display.css';

const Calculator = () => {
    return (
      <div id="container">
        <div className="display row">
          <h2 className='none'>0</h2>
        </div>

        <div className="top row">
          <div className="clearNum bordRight med">
          </div>

          <div className="divide operator sm">
            <h2>&divide;</h2>
          </div>
        </div>

        <div className="topNums row">
          <div className="seven bordRight sm"></div>

          <div className="eight bordRight sm" />
          <div className="nine bordRight sm" />
          <div className="multiply operator sm" />
        </div>

        <div className="middleNums row">
          <div className="four bordRight sm" />
          <div className="five bordRight sm" />
          <div className="six bordRight sm" />
          <div className="subtract operator sm" />
        </div>

        <div className="bottomNums row">
          <div className="one bordRight sm" />
          <div className="two bordRight sm" />
          <div className="three bordRight sm" />
          <div className="add operator sm" />
        </div>

        <div className="bottom row">
          <div className="zero bordRight med" />
          <div className="equal operator sm" />
        </div>
      </div>
    );
}

export default Calculator;