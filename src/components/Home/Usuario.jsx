import React from "react";
import "./styles/usuario.css";

const Usuario = ({ usuario, setEditar, setEliminar, setCOD_PERSONA }) => {

  const handleClickEditar = () => {
    setEditar(true);
    setCOD_PERSONA(usuario.COD_PERSONA);
    const modal = document.querySelector("#modal");
    modal.showModal();
  };

  const handleClickBorrar = () => {
    setEliminar(true);
    setCOD_PERSONA(usuario.COD_PERSONA);
    const modal = document.querySelector("#modal");
    modal.showModal();
  }

  return (
    <div className="usuario__contenedor">
      <div className="usuario__container__datos">
        <div className="codigo">{usuario.COD_PERSONA}</div>
      </div>
      <div className="usuario__container__datos">{usuario.NOMBRE}</div>
      <div className="usuario__container__datos">{usuario.APELLIDO}</div>
      <div className="usuario__container__datos">{usuario.NRO_DOCUMENTO}</div>
      <div className="usuario__container__datos">
        <button className="boton edit" onClick={handleClickEditar}>
          <i className="bx bxs-edit"></i>
        </button>
        <button className="boton borrar" onClick={handleClickBorrar}>
          <i className="bx bxs-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Usuario;
