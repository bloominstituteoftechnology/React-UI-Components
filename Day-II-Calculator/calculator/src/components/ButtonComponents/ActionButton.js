import React from 'react';


const ClearBtn = {
    width: '80%',
    height: '94px',
    fontSize: '3rem',
    textAlign: 'center',
    borderLeft: '2px solid gray',    
    borderBottom: '2px solid gray',
}

const RowZero = {
    display: 'flex',
    flexDirection: 'row',
}

const DivSignStyle = {
    width: '28%' ,
    background: '#A0001E' ,
    maxHeight: '95px' ,
    fontSize: '6rem' ,
    color: 'white',
    textAlign: 'center',
    border: '2px solid gray' ,
    borderTop: 'none' ,
}



const Clear = () => {
    return(
        <div style={RowZero}>
            <div style={ClearBtn}>
            Clear
             </div> 
             <div style={DivSignStyle} >÷</div>
            
       
        
        </div>
       
    )
}

export default Clear ;