import React from 'react';
import Container from './components/Container/Container';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    }
  }

  clearButton = event => {
    console.log('click')
    // event.preventDefault();
    this.setState({
      total: 0
    })
  }

  render() {
    return <Container clearButton={this.clearButton} total={this.state.total} />
  }
};

export default App;
