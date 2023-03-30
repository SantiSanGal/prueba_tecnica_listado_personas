import React from "react";
import "./styles/modalEliminar.css";

const ModalEliminar = ({ COD_PERSONA }) => {

  const handleClickEliminar = () => {
    $.ajax({
      url: "https:telemedicina.jakemate.net:7141/api/webservice/metodo",
      data: { _eliminarPersona_: "eliminarPersona", COD_PERSONA: COD_PERSONA },
      method: "POST",
      headers: {
          ContentType: "application/x-www-form-urlencoded",
          Token: "NJKJNTL8SNKH5JJRTS32ZGSIIDPGHLU6KRXLQMLMJJU8MD7EY5TSWMGD2D6Z",
          ApiKey: "ISSTIXZTV53RZURJKTZD3MXVMEW7X3",
      },
      success: function (resultados) {
          console.log(resultados);
      }
    });
  }

  return (
    <div className="modal__eliminar">
      <h3>¿Desea eliminar a esta Persona?</h3>
      <button className="modal__eliminar__btn" onClick={handleClickEliminar}>Eliminar</button>
    </div>
  );
};

export default ModalEliminar;
