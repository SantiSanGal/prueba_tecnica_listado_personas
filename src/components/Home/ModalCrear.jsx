import React from "react";
// import { useEffect } from "react";
import agregarPersonas from "../../utils/agregarPersonas";
import "./styles/modal.css";

const ModalCrear = ({ editar }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    agregarPersonas();
  };

  return (
    <div>
      {editar == !true ? <h3>Crear Nuevo usuario</h3> : <h3>Editar usuario</h3>}

      <form className="form__modal" onSubmit={handleSubmit}>
        <div className="form__modal__contenedor__dato">
          <label htmlFor="" className="form__modal__labels">Nombre:</label>
          <input type="text" className="form__modal__input" />
        </div>
        <div className="form__modal__contenedor__dato">
          <label htmlFor="" className="form__modal__labels">Apellido:</label>
          <input type="text" className="form__modal__input" />
        </div>
        <div className="form__modal__contenedor__dato">
          <label htmlFor="" className="form__modal__labels">Nro de Documento:</label>
          <input type="text" className="form__modal__input" />
        </div>
        {editar == !true ? (
          <button className="form__modal__btn">Aceptar</button>
        ) : (
          <button className="form__modal__btn edit">Editar</button>
        )}
      </form>
    </div>
  );
};

export default ModalCrear;
