import React from 'react'
import '../hojas de stylo/BotonClear.css'

export const BotonClear = (props) => {
  return (
    <div className='boton-clear' onClick={props.manejarClear}>Clear</div>
  )
}
