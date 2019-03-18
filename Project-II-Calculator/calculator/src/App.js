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
    }
    handleNumber(num) {
        this.setState({ total: (this.state.stack === false ? num : (10 * this.state.total) + num),
                        stack: (this.state.stack === false ? this.state.total : this.state.stack) });
    }
    render() {
        return <div className="calculator">
                 <Display total={this.state.total} />
                 {[...Array(9)].map((_, idx) => <NumberButton key={idx+1} number={idx+1} handleNumber={this.handleNumber}/>)}
                 <NumberButton key={0} number={0} handleNumber={this.handleNumber}/>
               </div>;
    }
}

export default App;
