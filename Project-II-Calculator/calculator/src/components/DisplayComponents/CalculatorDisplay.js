import React from 'react';
import './Display.css';
import ShapeSquare from './ShapeSquare';
import RectangleShape from './RectangleShape';
import RectoSquareShape from './RectoSquareShape';


const CalculatorDisplay =()=>{

    const data = {
        numbers : [0,1,2,3,4,5,6,7,8,9],
        words : "clear",
        symbols:["+","X","/","="]
        }

    
    
    function switchStyle(variable){
        return variable.backgroundColor="red";
    }

    return (
        <div className="Display">
                <RectangleShape digit={data.numbers[0]}/>
                    <div style={{display:"flex"}}>
                    <RectoSquareShape name="clear"/>
                    <ShapeSquare />
                </div>
                <div style={{display:"flex"}}>
                    <ShapeSquare data={data.numbers[7]}/>
                    <ShapeSquare data={data.numbers[8]}/>
                    <ShapeSquare data={data.numbers[9]}/>
                    <ShapeSquare name={data.symbols[0]}/>
                </div>
                <div style={{display:"flex"}}>
                    <ShapeSquare data={data.numbers[4]}/>
                    <ShapeSquare data={data.numbers[5]}/>
                    <ShapeSquare data={data.numbers[6]}/>
                    <ShapeSquare/>
                </div>
                <div style={{display:"flex"}}>
                    <ShapeSquare data={data.numbers[1]}/>
                    <ShapeSquare data={data.numbers[2]}/>
                    <ShapeSquare data={data.numbers[3]}/>
                    <ShapeSquare/>
                </div>
                <div style={{display:"flex"}}><RectoSquareShape name={data.numbers[0]}/>
                <ShapeSquare/></div>

        </div>
    )
}

export default CalculatorDisplay;