import React from 'react';

export default function ActionButton({ sym, click }) {
  return (
    <button className="action" onClick={click}>
      {sym}
    </button>
  )
}
