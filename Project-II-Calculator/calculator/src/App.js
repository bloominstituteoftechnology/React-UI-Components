import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

const nums = [1,2,3,4,5,6,7,8,9];
let total = 0;
let formula = "";
let displayFormula = "";
const NumberPanel = props =>{
    return props.function;
  }

/*
const App = () => {
  return (
    <div className = "calculator">
        <CalculatorDisplay content = {total}/>
        <div className = "button-groups">
            <div className = "left-button-group">
              <ActionButton content = "clear" style ="action-button-top" function = {() =>updateTotal("clear")}/>
              <NumberPanel />
              <ActionButton content = "0" style = "action-button-bottom" function = {() =>updateTotal("0")}/>
            </div>

          <div className = "right-button-group">
              <NumberButton buttonStyle = "function-button" content = {"\u00f7"} function = {()=>updateTotal("\u00f7")}/>
              <NumberButton buttonStyle = "function-button" content = {"\u00d7"} function = {()=>updateTotal("\u00d7")}/>
              <NumberButton buttonStyle = "function-button" content = {"-"} function = {()=>updateTotal("-")} />
              <NumberButton buttonStyle = "function-button" content = {"+"} function = {()=>updateTotal("+")} />
              <NumberButton buttonStyle = "function-button" content = {"="} function = {()=>updateTotal("=")} />





          </div>
        </div>
    </div>
  );
};
*/

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      total: 0,
      display: 0
    };
  }

   updateTotal = (input) =>{
      if(input==="="){
        total = eval(formula);
        this.setState({total: total});
        this.setState({display:total});

        formula = "";
        displayFormula="";
        return;

      }
      if(input ==="\u00d7"){
        formula+="*";
        displayFormula+=input;
        this.setState({display:displayFormula});

        return;
      }
      if(input ==="\u00f7"){
        formula+="/";
        displayFormula+=input;
        this.setState({display:displayFormula});

        return;
      }
      if(input ==="clear"){
        this.setState({total: 0});
        this.setState({display: 0});
        formula = "";
        displayFormula="";

        return;

      }
      else{
        formula+=input;
        displayFormula +=input;
        this.setState({display:displayFormula});
        return;

      }
  }

  listNums(){
    const numButtons= nums.map(num => {
      return <NumberButton buttonStyle = "number-button" content= {num} function = {()=>this.updateTotal(num)} />;

    });
    return <div className = "num-buttons-group">{numButtons}</div>;

  }




  render(){
    return(  <div className = "calculator">
          <CalculatorDisplay content = {this.state.display}/>
          <div className = "button-groups">
              <div className = "left-button-group">
                <ActionButton content = "clear" style ="action-button-top" function = {() =>this.updateTotal("clear")}/>
                <NumberPanel function = {this.listNums()}/>
                <ActionButton content = "0" style = "action-button-bottom" function = {() =>this.updateTotal("0")}/>
              </div>

            <div className = "right-button-group">
                <NumberButton buttonStyle = "function-button" content = {"\u00f7"} function = {()=>this.updateTotal("\u00f7")}/>
                <NumberButton buttonStyle = "function-button" content = {"\u00d7"} function = {()=>this.updateTotal("\u00d7")}/>
                <NumberButton buttonStyle = "function-button" content = {"-"} function = {()=>this.updateTotal("-")} />
                <NumberButton buttonStyle = "function-button" content = {"+"} function = {()=>this.updateTotal("+")} />
                <NumberButton buttonStyle = "function-button" content = {"="} function = {()=>this.updateTotal("=")} />





            </div>
          </div>
      </div>);
  }
}

export default App;
