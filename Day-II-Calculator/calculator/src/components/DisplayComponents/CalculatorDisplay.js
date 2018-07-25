import React from 'react';
import './Display.css';
import Button from '../ButtonComponents/NumberButton';


const Calculator = () => <div class="calculator">
<Button class="solution" text= "so"/>
<Button class="solution" text= "lu"/>
<Button class="solution" text= "ti"/>
<Button class="solution white" text= "0"/>
<Button class="clear white" text= "clear"/>
<Button class="clear" text= "clear"/>
<Button class="clear white" text= "clear"/>
<Button class="operator" text= "÷"/>
<Button class="number" text= "7"/>
<Button class="number" text= "8"/>
<Button class="number" text= "9"/>
<Button class="operator" text= "x"/>
<Button class="number" text= "4"/>
<Button class="number" text= "5"/>
<Button class="number" text= "6"/>
<Button class="operator" text= "-"/>
<Button class="number" text= "1"/>
<Button class="number" text= "2"/>
<Button class="number" text= "3"/>
<Button class="operator" text= "+"/>
<Button class="zero white" text= "0"/>
<Button class="zero" text= "0"/>
<Button class="zero white" text= "0"/>
<Button class="operator" text= "="/>
</div>;

export default Calculator;