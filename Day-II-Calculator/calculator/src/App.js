import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import Button from './components/ButtonComponents/Button'

const App = () => {
    return (
        <div className="container">
            <CalculatorDisplay initialValue="0" />
            <div className="buttonBox">
                <div className="keyPad">
                    <Button type={'clear'} text={'clear'} />
                    <div className="keyRow">
                        <Button type={'digit'} text={'7'} />
                        <Button type={'digit'} text={'8'} />
                        <Button type={'digit'} text={'9'} />
                    </div>
                    <div className="keyRow">
                        <Button type={'digit'} text={'4'} />
                        <Button type={'digit'} text={'5'} />
                        <Button type={'digit'} text={'6'} />
                    </div>
                    <div className="keyRow">
                        <Button type={'digit'} text={'1'} />
                        <Button type={'digit'} text={'2'} />
                        <Button type={'digit'} text={'3'} />
                    </div>
                    <Button type={'zero'} text={'0'} />
                </div>
                <div className="opPad">
                    <Button type={'oper'} text={'÷'} />
                    <Button type={'oper'} text={'x'} />
                    <Button type={'oper'} text={'-'} />
                    <Button type={'oper'} text={'+'} />
                    <Button type={'oper'} text={'='} />
                </div>
            </div>
        </div>
    );
};

export default App;
