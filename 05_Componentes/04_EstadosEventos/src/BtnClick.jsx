import React, { useState } from 'react'
import './App.css'

export function CompOnClick() {
  const [count, setCount] = useState(0)
  const countUp = () => setCount((count) => count + 1)
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Ejemplo No.01</h5>
      </div>
      <div className="card-body">
        <p>Ejemplo de estados y eventos - onClick</p>
        <button onClick={countUp}>
          Click No: {count}
        </button>
      </div>
    </div>
  )
}