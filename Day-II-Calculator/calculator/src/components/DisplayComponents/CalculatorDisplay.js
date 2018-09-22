import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const CalculatorDisplay = () => {
    return (
        <section className='calculator'>
            <section className='display'></section>
            <section className='buttons-container'>
                <section className='numeric-buttons-container'>
                    <ActionButton data={'clear'} displayStyle={'btn-action'}/>
                    <section className='numeric-buttons-well'>
                        <section className='number-row'>
                            <NumberButton data={7} displayStyle={'btn'} />
                            <NumberButton data={8} displayStyle={'btn'} />
                            <NumberButton data={9} displayStyle={'btn'} />
                        </section>
                        <section className='number-row'>
                            <NumberButton data={4} displayStyle={'btn'}/>
                            <NumberButton data={5} displayStyle={'btn'}/>
                            <NumberButton data={6} displayStyle={'btn'}/>
                        </section>
                        <section className='number-row'>
                            <NumberButton data={1} displayStyle={'btn'}/>
                            <NumberButton data={2} displayStyle={'btn'}/>
                            <NumberButton data={3} displayStyle={'btn'}/>
                        </section>
                    </section>
                    <ActionButton data={0} displayStyle={'btn-action'}/>
                </section>
                <section className='expression-buttons-container'>
                    <NumberButton data={'/'}  displayStyle={'btn-red'}/>
                    <NumberButton data={'X'} displayStyle={'btn-red'}/>
                    <NumberButton data={'-'} displayStyle={'btn-red'}/>
                    <NumberButton data={'+'} displayStyle={'btn-red'}/>
                    <NumberButton data={'='} displayStyle={'btn-red'}/>
                </section>
            </section>
        </section>
    );
};

export default CalculatorDisplay;
