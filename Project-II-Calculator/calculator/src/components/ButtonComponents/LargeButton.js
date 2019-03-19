import React from 'react'
import "./Button.css"

export default function LargeButton({ text, click }) {

  return (
    <button className="double" onClick={click}>
      {text}
    </button>
  )
}
