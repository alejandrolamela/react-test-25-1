
import React from 'react'

const Spent = (props) => {
    console.log("nuevo gasto", props.spentt);
  return (
    <div>
      <h4>
        <div className='spentt'>
            <p>Spent: {props.spentt.nombre}</p>
            <p>Importe: {props.spentt.importe}</p>
        </div>
      </h4>
    </div>
  )
}

export default Spent
