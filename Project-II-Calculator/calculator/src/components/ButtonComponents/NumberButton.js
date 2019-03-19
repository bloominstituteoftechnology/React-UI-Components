import React from 'react';
import './Button.css';
const numbersObj = [
  {display: "0",
   style: "action-button"
  },
  {display: "1",
    style: "number-button"
  },
  {display: "2",
    style: "number-button"
  },
  {display: "3",
    style: "number-button"
  },
  {display: "4",
    style: "number-button"
  },
  {display: "5",
    style: "number-button"
  },
  {display: "6",
    style: "number-button"
  },
  {display: "7",
    style: "number-button"
  },
  {display: "8",
    style: "number-button"
  },
  {display: "9",
    style: "number-button"
  },
  {display: "Clear",
    style: "action-button"
  }
]
const NumberButon = ()=> {
  return(
    <div>
      
    </div>
  );
}
function numbers() {
  return (
    <div className="number-button">
    {numbersObj.map(function(numbers){
      return <NumberButton numberProps={numbers}/>
    });}
    </div>
  );
}