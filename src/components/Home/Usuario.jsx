import React from "react";
import "./styles/usuario.css";

const Usuario = ({ usuario }) => {
    return (
        <div className="usuario__contenedor">
            <div className="usuario__container__datos">
                <div className="codigo">{usuario.COD_PERSONA}</div>
            </div>
            <div className="usuario__container__datos">{usuario.NOMBRE}</div>
            <div className="usuario__container__datos">{usuario.APELLIDO}</div>
            <div className="usuario__container__datos">{usuario.NRO_DOCUMENTO}</div>
            <div className="usuario__container__datos">
                <button className="boton edit">
                    <i className="bx bxs-edit"></i>
                </button>
                <button className="boton borrar">
                    <i className="bx bxs-trash"></i>
                </button>
            </div>
        </div>
  );
};

export default Usuario;
