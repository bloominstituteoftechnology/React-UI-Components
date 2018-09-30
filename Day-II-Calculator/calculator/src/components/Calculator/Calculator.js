import React from 'react';
import './Calculator.css';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const Calculator = (props) => {
    // Build the calculator layout.
    return (
        <table className='calculator'>
            <tr><td colspan='4'><CalculatorDisplay display='0'/></td></tr>
            <tr>
                <td colspan='3'>
                    <ActionButton label='clear' type='act-clear' />
                </td><td>
                    <NumberButton label='÷' type='symbol' />
                </td>
            </tr>
            <tr>
                <td><NumberButton label='7' /></td>
                <td><NumberButton label='8' /></td>
                <td><NumberButton label='9' /></td>
                <td><NumberButton label='X' type='symbol' /></td>
            </tr>
            <tr>
                <td><NumberButton label='4' /></td>
                <td><NumberButton label='5' /></td>
                <td><NumberButton label='6' /></td>
                <td><NumberButton label='-' type='symbol' /></td>
            </tr>
            <tr>
                <td><NumberButton label='1' /></td>
                <td><NumberButton label='2' /></td>
                <td><NumberButton label='3' /></td>
                <td><NumberButton label='+' type='symbol' /></td>
            </tr>
            <tr>
                <td colspan="3"><ActionButton label='0' /></td>
                <td><NumberButton label='=' type='symbol' /></td>
            </tr>

        </table>
    );
};

export default Calculator;