import React from 'react'
import '../hojas de stylo/Boton.css'

export const Boton = (props) => {
  const esOperador = (valor) => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  };
  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  )
}
