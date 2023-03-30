import React from 'react'
import { useEffect } from 'react';
import agregarPersonas from '../../utils/agregarPersonas';

const ModalCrear = () => {

    const handleClickCrear = () => {
        agregarPersonas();
    }
    
    return (
        <div>
            hi, from the modal
            <button onClick={handleClickCrear}>Aceptar</button>
        </div>
    )
}

export default ModalCrear