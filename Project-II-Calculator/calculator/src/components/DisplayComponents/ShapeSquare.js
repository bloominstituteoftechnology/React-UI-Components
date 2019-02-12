import React from "react";

const ShapeSquare =(props)=>{
    return (
        <div style={{backgroundColor :"purple",height:"7rem",width:"7rem",margin:"0.5%"}} >
                <p>{props.name}</p>
        </div>
    )
}

export default ShapeSquare;