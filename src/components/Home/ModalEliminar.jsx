import React from 'react'
import './styles/modalEliminar.css'

const ModalEliminar = () => {
  return (
    <div className='modal__eliminar'>
        <h3>¿Desea eliminar a esta Persona?</h3>
        <button className='modal__eliminar__btn'>Eliminar</button>
    </div>
  )
}

export default ModalEliminar