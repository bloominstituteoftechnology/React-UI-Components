import React from 'react';
import './Display.css';
import ShapeSquare from './ShapeSquare';
import RectangleShape from './RectangleShape';
import RectoSquareShape from './RectoSquareShape';


const CalculatorDisplay =()=>{
    return (
        <div className="Display">
                <RectangleShape/>
                <div style={{display:"flex"}}><RectoSquareShape/><ShapeSquare/></div>
                <div style={{display:"flex"}}><ShapeSquare/><ShapeSquare/><ShapeSquare/><ShapeSquare style={{backgroundColor:"#A0001E"}}/></div>
                <div style={{display:"flex"}}><ShapeSquare/><ShapeSquare/><ShapeSquare/><ShapeSquare/></div>
                <div style={{display:"flex"}}><ShapeSquare/><ShapeSquare/><ShapeSquare/><ShapeSquare/></div>
               <div style={{display:"flex"}}><RectoSquareShape/><ShapeSquare/></div>

        </div>
    )
}

export default CalculatorDisplay;