

import React, { useState } from 'react'
import "./Toggle.css"
const Toggle = () => {

    const [color, setColor] = useState("red");

    const cambiarColor = ()=> {
        return color==="red"?setColor("blue"):setColor("red");
    }
  return (
    <div className='toggleStyle' onClick={cambiarColor} style={{backgroundColor:color}}>
      <p>
        Soy un div
      </p>
    </div>
  )
}

export default Toggle
