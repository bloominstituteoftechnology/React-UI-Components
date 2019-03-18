import React from 'react';
import './App.css';
import { NumberButton, ActionButton } from './components/ButtonComponents';
import Display from './components/DisplayComponents';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { total: 0,
                       action: null };
        this.handleNumber = this.handleNumber.bind(this);
    }
    handleNumber(num) {
        this.setState({ total: (this.state.action ? this.state.action(this.state.total, num) : num),
                        action: null });
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
