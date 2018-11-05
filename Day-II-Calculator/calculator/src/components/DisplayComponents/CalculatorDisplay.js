import React from 'react';
import WorkspaceDisplay from './WorkspaceDisplay';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';
import OperatorButton from '../ButtonComponents/OperatorButton';

class CalculatorDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: props.total,
        };
    }

    clear = () => {
        this.setState({
            total: '',
        });
    };

    add = () => {
        if (this.state.total) {
            if (this.state.total[this.state.total.length - 1].includes('+') 
            || this.state.total[this.state.total.length - 1].includes('-') 
            || this.state.total[this.state.total.length - 1].includes('/')
            || this.state.total[this.state.total.length - 1].includes('*')) { 
                this.setState({
                    total: this.state.total.slice(0, -1) + '+',
                });
                return; 
            }
            this.setState({
                total: this.state.total + ' +',
            });
        }
    };

    subtract = () => {
        if (this.state.total) {
            if (this.state.total[this.state.total.length - 1].includes('+') 
            || this.state.total[this.state.total.length - 1].includes('-') 
            || this.state.total[this.state.total.length - 1].includes('/')
            || this.state.total[this.state.total.length - 1].includes('*')) { 
                this.setState({
                    total: this.state.total.slice(0, -1) + '-',
                });
                return; 
            }
            this.setState({
                total: this.state.total + ' -',
            });
        }
    };

    multiply = () => {
        if (this.state.total) {
            if (this.state.total[this.state.total.length - 1].includes('+') 
            || this.state.total[this.state.total.length - 1].includes('-') 
            || this.state.total[this.state.total.length - 1].includes('/')
            || this.state.total[this.state.total.length - 1].includes('*')) { 
                this.setState({
                    total: this.state.total.slice(0, -1) + '*',
                });
                return; 
            }
            this.setState({
                total: this.state.total + ' *',
            });
        }
    };

    divide = () => {
        if (this.state.total) {
            if (this.state.total[this.state.total.length - 1].includes('+') 
            || this.state.total[this.state.total.length - 1].includes('-') 
            || this.state.total[this.state.total.length - 1].includes('/')
            || this.state.total[this.state.total.length - 1].includes('*')) { 
                this.setState({
                    total: this.state.total.slice(0, -1) + '/',
                });
                return; 
            }
            this.setState({
                total: this.state.total + ' /',
            });
        }
    };

    equals = () => {
        if (this.state.total) {
            if (this.state.total[this.state.total.length - 1].includes('+') 
            || this.state.total[this.state.total.length - 1].includes('-') 
            || this.state.total[this.state.total.length - 1].includes('/')
            || this.state.total[this.state.total.length - 1].includes('*')) {
                this.setState({
                    total: this.state.total.slice(0, -2),
                });
            }
            this.setState({
                total: eval(this.state.total).toPrecision(6).toString(),
            });
        }
    };


    render() {
        return (
            <div className='container border'>
                <WorkspaceDisplay num={this.state.total} />
                <div className='row border-bottom'>
                    <div className='col-9 border-right' onClick={this.clear}> <ActionButton text='clear' /> </div>
                    <div className='col-3 bg-red' onClick={this.divide}> <OperatorButton operator='÷' /> </div>
                </div>
                <div className='row border-bottom'>
                    <div className='col-3' onClick={this.concatSeven}> <NumberButton num='7' /> </div>
                    <div className='col-3 border-left border-right' onClick={this.concatEight}> <NumberButton num='8' /> </div>
                    <div className='col-3 border-right' onClick={this.concatNine}> <NumberButton num='9' /> </div>
                    <div className='col-3 bg-red' onClick={this.multiply}> <OperatorButton operator='×' /> </div>
                </div>
                <div className='row border-bottom'>
                    <div className='col-3' onClick={this.concatFour}> <NumberButton num='4' /> </div>
                    <div className='col-3 border-left border-right' onClick={this.concatFive}> <NumberButton num='5' /> </div>
                    <div className='col-3 border-right' onClick={this.concatSix}> <NumberButton num='6' /> </div>
                    <div className='col-3 bg-red' onClick={this.subtract}> <OperatorButton operator='−' /> </div>
                </div>
                <div className='row border-bottom'>
                    <div className='col-3' onClick={this.concatOne}> <NumberButton num='1' /> </div>
                    <div className='col-3 border-left border-right' onClick={this.concatTwo}> <NumberButton num='2' /> </div>
                    <div className='col-3 border-right' onClick={this.concatThree}> <NumberButton num='3' /> </div>
                    <div className='col-3 bg-red' onClick={this.add}> <OperatorButton operator='+' /> </div>
                </div>
                <div className='row'>
                    <div className='col-9 border-right' onClick={this.concatZero}> <ActionButton text='0' /> </div>
                    <div className='col-3 bg-red' onClick={this.equals}> <OperatorButton operator='=' /> </div>
                </div>
            </div>
        );
    }

    concatZero = () => {
        if (this.state.total) {
            if (this.state.total[this.state.total.length - 1].includes('+') 
            || this.state.total[this.state.total.length - 1].includes('-') 
            || this.state.total[this.state.total.length - 1].includes('/')
            || this.state.total[this.state.total.length - 1].includes('*')) {
                this.setState({
                    total: this.state.total + ' 0',
                });
                return; 
            }
            this.setState({
                total: this.state.total + '0',
            });
        }
    };

    concatOne = () => {
        if (this.state.total) {
            if (this.state.total[this.state.total.length - 1].includes('+') 
            || this.state.total[this.state.total.length - 1].includes('-') 
            || this.state.total[this.state.total.length - 1].includes('/')
            || this.state.total[this.state.total.length - 1].includes('*')) {
                this.setState({
                    total: this.state.total + ' 1',
                });
                return; 
            }
        }
        this.setState({
            total: this.state.total + '1',
        });
    };

    concatTwo = () => {
        if (this.state.total) {
            if (this.state.total[this.state.total.length - 1].includes('+') 
            || this.state.total[this.state.total.length - 1].includes('-') 
            || this.state.total[this.state.total.length - 1].includes('/')
            || this.state.total[this.state.total.length - 1].includes('*')) {
                this.setState({
                    total: this.state.total + ' 2',
                });
                return; 
            }
        }
        this.setState({
            total: this.state.total + '2',
        });
    };

    concatThree = () => {
        if (this.state.total) {
            if (this.state.total[this.state.total.length - 1].includes('+') 
            || this.state.total[this.state.total.length - 1].includes('-') 
            || this.state.total[this.state.total.length - 1].includes('/')
            || this.state.total[this.state.total.length - 1].includes('*')) {
                this.setState({
                    total: this.state.total + ' 3',
                });
                return; 
            }
        }
        this.setState({
            total: this.state.total + '3',
        });
    };

    concatFour = () => {
        if (this.state.total) {
            if (this.state.total[this.state.total.length - 1].includes('+') 
            || this.state.total[this.state.total.length - 1].includes('-') 
            || this.state.total[this.state.total.length - 1].includes('/')
            || this.state.total[this.state.total.length - 1].includes('*')) {
                this.setState({
                    total: this.state.total + ' 4',
                });
                return; 
            }
        }
        this.setState({
            total: this.state.total + '4',
        });
    };

    concatFive = () => {
        if (this.state.total) {
            if (this.state.total[this.state.total.length - 1].includes('+') 
            || this.state.total[this.state.total.length - 1].includes('-') 
            || this.state.total[this.state.total.length - 1].includes('/')
            || this.state.total[this.state.total.length - 1].includes('*')) {
                this.setState({
                    total: this.state.total + ' 5',
                });
                return; 
            }
        }
        this.setState({
            total: this.state.total + '5',
        });
    };

    concatSix = () => {
        if (this.state.total) {
            if (this.state.total[this.state.total.length - 1].includes('+') 
            || this.state.total[this.state.total.length - 1].includes('-') 
            || this.state.total[this.state.total.length - 1].includes('/')
            || this.state.total[this.state.total.length - 1].includes('*')) {
                this.setState({
                    total: this.state.total + ' 6',
                });
                return; 
            }
        }
        this.setState({
            total: this.state.total + '6',
        });
    };

    concatSeven = () => {
        if (this.state.total) {
            if (this.state.total[this.state.total.length - 1].includes('+') 
            || this.state.total[this.state.total.length - 1].includes('-') 
            || this.state.total[this.state.total.length - 1].includes('/')
            || this.state.total[this.state.total.length - 1].includes('*')) {
                this.setState({
                    total: this.state.total + ' 7',
                });
                return; 
            }
        }
        this.setState({
            total: this.state.total + '7',
        });
    };

    concatEight = () => {
        if (this.state.total) {
            if (this.state.total[this.state.total.length - 1].includes('+') 
            || this.state.total[this.state.total.length - 1].includes('-') 
            || this.state.total[this.state.total.length - 1].includes('/')
            || this.state.total[this.state.total.length - 1].includes('*')) {
                this.setState({
                    total: this.state.total + ' 8',
                });
                return; 
            }
        }
        this.setState({
            total: this.state.total + '8',
        });
    };

    concatNine = () => {
        if (this.state.total) {
            if (this.state.total[this.state.total.length - 1].includes('+') 
            || this.state.total[this.state.total.length - 1].includes('-') 
            || this.state.total[this.state.total.length - 1].includes('/')
            || this.state.total[this.state.total.length - 1].includes('*')) {
                this.setState({
                    total: this.state.total + ' 9',
                });
                return; 
            }
        }
        this.setState({
            total: this.state.total + '9',
        });
    };
}

export default CalculatorDisplay;