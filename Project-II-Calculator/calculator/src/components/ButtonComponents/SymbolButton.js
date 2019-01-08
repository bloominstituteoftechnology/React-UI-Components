import React from 'react';
import './Button.css';

class SymbolButton extends React.Component{
  render() {
   return (
      <button className="symbol">
        {this.props.value}
      </button>
    );
  }
}

class Symbols extends React.Component {
  renderSymbolButton(i) {
    return <SymbolButton value={i} />;
  }

  render() {
    return (
      <div className="symbol-column">
        {this.renderSymbolButton(`÷`)}
        {this.renderSymbolButton(`X`)}
        {this.renderSymbolButton(`-`)}
        {this.renderSymbolButton(`+`)}
      </div>
    );
  }
}

export default Symbols;