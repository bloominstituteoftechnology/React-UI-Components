import React from 'react';
import './Display.css';

const CalculatorDisplay = () => {
    return (
        <section>
            <section className='display'></section>
            <section className='buttons-container'>
                <section className='numeric-buttons-container'>
                    <ActionButton data={'clear'} />
                    <NumberButton data={7} />
                    <NumberButton data={6} />
                    <NumberButton data={5} />
                    <NumberButton data={4} />
                    <NumberButton data={3} />
                    <NumberButton data={2} />
                    <NumberButton data={1} />
                    <ActionButton data={0} />
                </section>
                <section className='expression-buttons-container'>
                    <NumberButton data={'/'} />
                    <NumberButton data={'X'} />
                    <NumberButton data={'-'} />
                    <NumberButton data={'+'} />
                    <NumberButton data={'='} />
                </section>
            </section>
        </section>
    );
};

export default CalculatorDisplay;
