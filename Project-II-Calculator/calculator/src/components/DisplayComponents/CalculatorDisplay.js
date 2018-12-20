import React from 'react';
import './Display.css';
import ShapeSquare from './ShapeSquare';
import RectangleShape from './RectangleShape';
import RectoSquareShape from './RectoSquareShape';


const CalculatorDisplay =()=>{
    return (
        <div className="Display">
                <RectangleShape/>
                <RectoSquareShape/>
                <div style={{display:"flex"}}><ShapeSquare/><ShapeSquare/><ShapeSquare/></div>
                <div style={{display:"flex"}}><ShapeSquare/><ShapeSquare/><ShapeSquare/></div>
                <div style={{display:"flex"}}><ShapeSquare/><ShapeSquare/><ShapeSquare/></div>
                <RectoSquareShape/>
                

        </div>
    )
}

export default CalculatorDisplay;