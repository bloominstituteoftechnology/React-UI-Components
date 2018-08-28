import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

export default function CalculatorDisplay() {
    const action = {
        divide: '/',
        multiply: '*',
        subtract: '-',
        add: '+',
        evaluate: '=', 
        clear: 'Clear'
    }

    function cssClass(className){
        return (
            Object.keys(action).filter(c => c === className)
        )
    }

    return (
        <div className="container">
            <div className="evaluation">
                <h1 className="eval-number">
                    0
                </h1>
            </div>
            <div className="row">
                <ActionButton action={action.clear} cssClass={cssClass('clear') + ' white'} />
                <ActionButton action={action.divide} entity="&divide;" cssClass={cssClass('divide')}  />
            </div>
            <div className="row">
                <NumberButton number={7} />
                <NumberButton number={8} />
                <NumberButton number={9} />
                <ActionButton action={action.multiply} entity="x" cssClass={cssClass('multiply')} />
            </div>
            <div className="row">
                <NumberButton number={4} />
                <NumberButton number={5} />
                <NumberButton number={6} />
                <ActionButton action={action.subtract} cssClass={cssClass('subtract')} />
            </div>
            <div className="row">
                <NumberButton number={1} />
                <NumberButton number={2} />
                <NumberButton number={3} />
                <ActionButton action={action.add} cssClass={cssClass('add')} />
            </div>
            <div className="row">
                <NumberButton number={0} />
                <ActionButton action={action.evaluate} cssClass={cssClass('evaluate')} />
            </div>
        </div>
    )
}
