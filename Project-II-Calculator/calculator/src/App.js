import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/Display';
import Button from './components/ButtonComponents/Button';
import Action from './components/ButtonComponents/Action';
import Number from './components/ButtonComponents/Number';

class App extends React.Component {
  render() {
    return (
      <div className="calculator-wrapper">
        <Display />
        <Button>
          <Action className="key3 textkey" text="clear" />
          <Action className="key1 redkey" text="÷" />
        </Button>
        <Button>
          <Number bgColor="key1 numkey" text="7" />
          <Number bgColor="key1 numkey" text="8" />
          <Number bgColor="key1 numkey" text="9" />
          <Action className="key1 redkey" text="×" />
        </Button>
        <Button>
          <Number bgColor="key1 numkey" text="4" />
          <Number bgColor="key1 numkey" text="5" />
          <Number bgColor="key1 numkey" text="6" />
          <Action className="key1 redkey" text="−" />
        </Button>
        <Button>
          <Number bgColor="key1 numkey" text="1" />
          <Number bgColor="key1 numkey" text="2" />
          <Number bgColor="key1 numkey" text="3" />
          <Action className="key1 redkey" text="+" />
        </Button>
        <Button>
          <Number bgColor="key3 numkey" text="0" />
          <Action className="key1 redkey" text="=" />
        </Button>
      </div>
    );
  }
}

export default App;