import React from 'react';
import './Button.css';

const numberList = [
  {
    text: "clear",
    class: "clear actionButton"
  },
  {
    text: "9",
    class: "nine Number"
  },
  {
    text: "8",
    class: "eight Number"
  },
  {
    text: "7",
    class: "seven Number"
  },
  {
    text: "6",
    class: "six Number"
  },
  {
    text: "5",
    class: "five Number"
  },
  {
    text: "4",
    class: "four Number"
  },
  {
    text: "3",
    class: "three Number"
  },
  {
    text: "2",
    class: "two Number"
  },
  {
    text: "1",
    class: "one Number"
  },
  {
    text: "0",
    class: "zero actionButton"
  }
];

const actionList = [
  {
    text: "÷",
    class: "divide Button"
  },
  {
    text: "x",
    class: "muliply Button"
  },
  {
    text: "-",
    class: "subtract Button"
  },
  {
    text: "+",
    class: "add Button"
  },
  {
    text: "=",
    class: "equal Button"
  }
]


const ActionButton = (props) => {
  const buttonClick = (e) => {
    console.log(NumberButton.props)
  }

  const NumberButton = () => {
    return (
      numberList.map((obj, key) => {
        return (
          <button key={key}
            onClick={() => { buttonClick() }}
            className={obj.class}>
            {obj.text}
          </button>
        )
      })
    )
  }



  return (
    <div className="actionButtonContainer">
      <div className="clear">
        <NumberButton buttonClick={buttonClick} />
      </div>
      <div className="action">
        {
          actionList.map((obj, key) => {
            return (
              <button key={key} className={obj.class}>{obj.text}</button>
            )
          })
        }
      </div>
    </div>
  )
}


export default ActionButton;