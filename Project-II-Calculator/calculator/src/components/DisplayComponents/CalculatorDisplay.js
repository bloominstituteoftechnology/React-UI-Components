import React from 'react';

import './Display.css';
import ShapeSquare from './ShapeSquare';
import RectangleShape from './RectangleShape';
import RectoSquareShape from './RectoSquareShape';
import NumberButton from "../ButtonComponents/NumberButton"


const CalculatorDisplay =()=>{

    const data = {
        numbers : [0,1,2,3,4,5,6,7,8,9],
        words : "clear",
        symbols:["+","X","/","=","-"]
        }

    return (
        <div className="Display">

                <NumberButton style={{color:"white",marginBottom:"10%"}} /> 0
                <RectangleShape digit={data.numbers[0]}/>
                    <div style={{display:"flex"}}>
                    <RectoSquareShape name="clear"/>
                    <ShapeSquare name={data.symbols[2]}/>
                </div>
                <div style={{display:"flex"}}>
                    <ShapeSquare name={data.numbers[7]}/>
                    <ShapeSquare name={data.numbers[8]}/>
                    <ShapeSquare name={data.numbers[9]}/>
                    <ShapeSquare name={data.symbols[1]}/>
                </div>
                <div style={{display:"flex"}}>
                    <ShapeSquare name={data.numbers[4]}/>
                    <ShapeSquare name={data.numbers[5]}/>
                    <ShapeSquare name={data.numbers[6]}/>
                    <ShapeSquare name={data.symbols[4]}/>
                </div>
                <div style={{display:"flex"}}>
                    <ShapeSquare name={data.numbers[1]}/>
                    <ShapeSquare name={data.numbers[2]}/>
                    <ShapeSquare name={data.numbers[3]}/>
                    <ShapeSquare name={data.symbols[0]}/>
                </div>
                    <div style={{display:"flex"}}><RectoSquareShape name={data.numbers[0]}/>
                    <ShapeSquare name={data.symbols[3]}/>
                </div>

        </div>
    )
}

export default CalculatorDisplay;
