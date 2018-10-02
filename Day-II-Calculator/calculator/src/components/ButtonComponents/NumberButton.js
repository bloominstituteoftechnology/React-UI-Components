import React from 'react';
import './Button.css';

const NumberButton = () => {
    return (
        <div className='container-white'>
            <div className='clear'>clear</div>
            <div className='count'>
                <div class="integer">7</div>
                <div class="integer">8</div>
                <div class="integer">9</div>
                <div class="integer">4</div>
                <div class="integer">5</div>
                <div class="integer">6</div>
                <div class="integer">1</div>
                <div class="integer">2</div>
                <div class="integer">3</div>
            </div>
            <div class='zero'>0</div>
        </div>
    );
};

export default NumberButton;