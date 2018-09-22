import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';

const NumberContainer = (props) => {
    return (
        <div class='number-buttons'>
            <div class='clear-numbers'>
                <NumberButton text='clear' />
            </div>
            <div class='main-numbers'>
                <div class='number'>
                    <NumberButton className='number' text='7' />
                </div>
                <div class='number'>
                    <NumberButton className='number' text='8' />
                </div>
                <div class='number'>
                    <NumberButton className='number' text='9' />
                </div>
                <div class='number'>
                    <NumberButton className='number' text='4' />
                </div>
                <div class='number'>
                    <NumberButton className='number' text='5' />
                </div>
                <div class='number'>
                    <NumberButton className='number' text='6' />
                </div>
                <div class='number'>
                    <NumberButton className='number' text='1' />
                </div>
                <div class='number'>
                    <NumberButton className='number' text='2' />
                </div>
                <div class='number'>
                    <NumberButton className='number' text='3' />
                </div>
            </div>
            <div class='zero'>
                <NumberButton text='0' />
            </div>
        </div>
    )
}

export default NumberContainer;