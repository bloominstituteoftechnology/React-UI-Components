import React from 'react';
import './App.css';
import { NumberButton, ActionButton } from './components/ButtonComponents';
import Display from './components/DisplayComponents';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { total: 0,
                       stack: false,
                       action: false };
        this.handleNumber = this.handleNumber.bind(this);
        this.handleAction = this.handleAction.bind(this);
        this.actions = [{action: (a, b) => a / b, text: "÷"},
                        {action: (a, b) => a * b, text: "×"},
                        {action: (a, b) => a - b, text: "−"},
                        {action: (a, b) => a + b, text: "+"},
                        {action: true, text: "="}];
    }
    handleNumber(num) {
        this.setState({ total: (this.state.stack === this.state.total ? num : (10 * this.state.total) + num),
                        stack: (this.state.stack ? this.state.total : this.state.stack) });
    }
    handleAction(action) {
        if (action === true) { // '=' triggers stacked action
            this.setState({total: this.state.action ? this.state.action(this.state.stack, this.state.total) : this.state.total,
                           action: false });
        } else if (action === false) { // 'clear' clears total and stacks
            this.setState({ total: 0,
                            stack: false,
                            action: false });
        } else if (action) { // otherwise, stack action and total
            this.setState({ action: action,
                            stack: this.state.total });
        }
    }
    render() {
        return <div className="calculator">
                 <Display total={this.state.total} />
                 <div className="keypad">
                   <div className="numbers">
                     <ActionButton action={false}
                                   text={'clear'}
                                   buttonStyle="number-wide"
                                   handleAction={this.handleAction}/>
                     {[...Array(9)].map((_, idx) =>
                                        <NumberButton key={idx+1}
                                                      number={idx+1}
                                                      handleNumber={this.handleNumber}/>)}
                     <NumberButton key={0}
                                   number={0}
                                   buttonStyle="number-wide"
                                   handleNumber={this.handleNumber}/>
                   </div>
                   <div className="sidepanel">
                     {this.actions.map(({action, text}, idx) =>
                                       <ActionButton key={idx}
                                                     action={action}
                                                     text={text}
                                                     handleAction={this.handleAction}/>)}
                   </div>
                 </div>
               </div>;
    }
}

export default App;
