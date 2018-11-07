import React from 'react';
import { Component } from 'react';
import './App.sass';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDivide, faTimes, faMinus, faPlus, faEquals } from '@fortawesome/free-solid-svg-icons';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonsContainer from './components/ButtonComponents/ButtonsContainer';

library.add(faDivide, faTimes, faMinus, faPlus, faEquals);

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentVal: '0',
            prevVal: '0',
            formula: '',
            currentOperator: 'pos',
            lastClicked: ''
        };
    }
    handleClick(event) {
        if (event.id == 'clear') {
            this.setState({
                displayNumber: 0,
                currentEquation: [],
                total: 0
            });
        } else if (event.id == '=') {
            this.runEquation();
        } else if (event.id == ('+' || '-' || '/' || '*')) {
            this.setState({
                displayNumber: '',
                currentEquation: this.state.currentEquation.concat([event.target.value])
            });
        } else {
            this.setState({
                currentEquation: this.state.currentEquation.concat([event.target.value])
            });
        }
    }
    runEquation() {
        let working = this.state.currentEquation.join('');
    }
    render() {
        return (
            <div className="app">
                <CalculatorDisplay currentValue={this.state.displayNumber} />
                <ButtonsContainer />
            </div>
        );
    }
}

export default App;
