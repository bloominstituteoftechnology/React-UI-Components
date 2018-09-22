import React from "react";
import "./Button.css";
import {NumberButton} from "./NumberButton";
import ActionButton from "./ActionButton";
import {Display} from "../DisplayComponents/CalculatorDisplay";

class NumberDisplay extends React.Component {
    
    constructor(props){
    
        super(props)
       // Initilizing the state 
        this.setState = {
            input:0
        }
    }
   render (){
    return (
      <div>
          {/* Initilizing State to 0 on display */}
        <Display input = {this.setState.input} />
        
            <div>
                <ActionButton buttonStyle={`action`} text={"clear"}  />
                <NumberButton buttonStyle={"math"} text={<i class="fas fa-divide" />} />
            </div>

            <div>
                <NumberButton buttonStyle={`number`} text={"7"} />
                <NumberButton buttonStyle={`number`} text={"8"} />
                <NumberButton buttonStyle={`number`} text={"9"} />
                <NumberButton buttonStyle={"math"} text={<i class="fas fa-times"></i>} />
            </div>
            <div>
                <NumberButton buttonStyle={`number`} text={"4"} />
                <NumberButton buttonStyle={`number`} text={"5"} />
                <NumberButton buttonStyle={`number`} text={"6"} />
                <NumberButton buttonStyle={"math"} text={<i class="fas fa-minus" />} />
            </div>
            <div>
                <NumberButton buttonStyle={`number`} text={"1"} />
                <NumberButton buttonStyle={`number`} text={"2"} />
                <NumberButton buttonStyle={`number`} text={"3"} />
                <NumberButton buttonStyle={"math"} text={<i class="fas fa-plus"></i>} />
            </div>
            <div>
                <ActionButton buttonStyle={"action"} text={"0"} />
                <NumberButton buttonStyle={"math"} text={<i class="fas fa-equals" />} />
            </div>

        </div>
    )
}
}

export default NumberDisplay