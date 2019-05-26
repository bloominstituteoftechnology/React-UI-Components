import React from 'react';
import './Button.css';

import ActionButton from '../ButtonComponents/ActionButton';
const NumberButton = () => {
    return (
        <div class="key-pad">
            <div class="numbers">
                    <div class="clear">
                        <div class="clear-content">
                        clear
                        </div>
                    </div>
                    <div class="numbers">
                        <div class="row1">
                            <div class="number">7</div>
                            <div class="number">4</div>
                            <div class="number">1</div>
                        </div>
                        <div class="row2">
                            <div class="number">8</div>
                            <div class="number">5</div>
                            <div class="number">2</div>
                        </div>
                        <div class="row3">
                            <div class="number">9</div>
                            <div class="number">6</div>
                            <div class="number">3</div>
                        </div>
                    </div>
                <div class="zero">
                0   
                </div>
            </div>
            <ActionButton />
        </div>
    );
};


export default NumberButton;