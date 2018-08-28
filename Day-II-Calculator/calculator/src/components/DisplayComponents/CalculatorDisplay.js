import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

export default class CalculatorDisplay extends React.Component {
    
    constructor(){
        super();
        this.state = {
            expression: '',
            evaluation: 0,
        } 
        this.handleNumberClick = this.handleNumberClick.bind(this);
        this.handleOperatorClick = this.handleOperatorClick.bind(this);
    }

    handleNumberClick = (num) => {
        console.log(num);
        let currentState = this.state.expression;
        this.setState({
            expression: currentState += num
        })
    }

    handleOperatorClick = (action) => {
        console.log(action);
        let currentState = this.state.expression;
        if (action === '='){
            console.log(action);
            const divOrMultiplyByZero = /0+(?:\.?0*)?(?!\d)/g
        if(currentState.split(/[*/]/)[1] === '0'){
                if(this.state.expression.includes('*')){
                    this.setState({expression: '0'});
                } else {
                    this.setState({expression: 'NaN'});
                }
            } else {
                let result = eval( ((this.state.expression)) );
                this.setState({expression: '', evaluation: result.toLocaleString()});
            }
        } else if(action === 'clear'){
            this.setState({expression: '', evaluation: ''})
        } else {
            this.setState({
                expression: currentState += action
            })
        }
    }

    render(){

        const action = {
            divide: '/',
            multiply: '*',
            subtract: '-',
            add: '+',
            evaluate: '=', 
            clear: 'clear'
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
                        {this.state.evaluation ? this.state.evaluation : this.state.expression}
                    </h1>
                </div>
                <div className="row">
                    <ActionButton action={action.clear} cssClass={cssClass('clear') + ' white'} handleOperatorClick={this.handleOperatorClick} />
                    <ActionButton action={action.divide} entity="&divide;" cssClass={cssClass('divide')} handleOperatorClick={this.handleOperatorClick}  />
                </div>
                <div className="row">
                    <NumberButton number={7} handleNumberClick={this.handleNumberClick} />
                    <NumberButton number={8} handleNumberClick={this.handleNumberClick} />
                    <NumberButton number={9} handleNumberClick={this.handleNumberClick} />
                    <ActionButton action={action.multiply} entity="x" cssClass={cssClass('multiply')} handleOperatorClick={this.handleOperatorClick}/>
                </div>
                <div className="row">
                    <NumberButton number={4} handleNumberClick={this.handleNumberClick} />
                    <NumberButton number={5} handleNumberClick={this.handleNumberClick} />
                    <NumberButton number={6} handleNumberClick={this.handleNumberClick} />
                    <ActionButton action={action.subtract} cssClass={cssClass('subtract')} handleOperatorClick={this.handleOperatorClick}/>
                </div>
                <div className="row">
                    <NumberButton number={1} handleNumberClick={this.handleNumberClick} />
                    <NumberButton number={2} handleNumberClick={this.handleNumberClick} />
                    <NumberButton number={3} handleNumberClick={this.handleNumberClick} />
                    <ActionButton action={action.add} cssClass={cssClass('add')} handleOperatorClick={this.handleOperatorClick}/>
                </div>
                <div className="row">
                    <NumberButton number={0} handleNumberClick={this.handleNumberClick} />
                    <ActionButton action={action.evaluate} cssClass={cssClass('evaluate')} handleOperatorClick={this.handleOperatorClick}/>
                </div>
            </div>
        )
    }
}
