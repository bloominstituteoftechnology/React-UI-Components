import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';


const Calculator = () => <div class="calculator">
<NumberButton class="solution" text= "so"/>
<NumberButton class="solution" text= "lu"/>
<NumberButton class="solution" text= "ti"/>
<NumberButton class="solution white" text= "0"/>
<NumberButton class="clear white" text= "clear"/>
<NumberButton class="clear" text= "clear"/>
<NumberButton class="clear white" text= "clear"/>
<ActionButton class="operator" text= "÷"/>
<NumberButton class="number" text= "7"/>
<NumberButton class="number" text= "8"/>
<NumberButton class="number" text= "9"/>
<ActionButton class="operator" text= "×"/>
<NumberButton class="number" text= "4"/>
<NumberButton class="number" text= "5"/>
<NumberButton class="number" text= "6"/>
<ActionButton class="operator" text= "-"/>
<NumberButton class="number" text= "1"/>
<NumberButton class="number" text= "2"/>
<NumberButton class="number" text= "3"/>
<ActionButton class="operator" text= "+"/>
<NumberButton class="zero white" text= "0"/>
<NumberButton class="zero" text= "0"/>
<NumberButton class="zero white" text= "0"/>
<ActionButton class="operator" text= "="/>
</div>;

export default Calculator;