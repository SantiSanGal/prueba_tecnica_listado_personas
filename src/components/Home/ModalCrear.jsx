import React from "react";
import { useForm } from "react-hook-form";
import $ from 'jquery'
import "./styles/modal.css";

const ModalCrear = ({ editar, COD_PERSONA }) => {

  const { register, handleSubmit, reset } = useForm()

  console.log(COD_PERSONA);

  const submit = data =>{
    if(!editar){
      console.log(editar);
      $.ajax({
        url: "https:telemedicina.jakemate.net:7141/api/webservice/metodo",
        data: { _agregrPersonas_: "agregarPersonas", NOMBRE: data.NOMBRE, APELLIDO: data.APELLIDO, NRO_DOCUMENTO: data.NRO_DOCUMENTO },
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
      reset({
        NOMBRE: '',
        APELLIDO: '',
        NRO_DOCUMENTO: ''
      });
    } else {
      console.log(editar);
      $.ajax({
        url: "https:telemedicina.jakemate.net:7141/api/webservice/metodo",
        data: { _editarPersonas_: "editarPersonas", COD_PERSONA: COD_PERSONA, NOMBRE: data.NOMBRE, APELLIDO: data.APELLIDO, NRO_DOCUMENTO: data.NRO_DOCUMENTO },
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
      reset({
        NOMBRE: '',
        APELLIDO: '',
        NRO_DOCUMENTO: ''
      });
    }
  }

  return (
    <div>
      {editar == !true ? <h3>Crear Persona Nueva</h3> : <h3>Editar Persona</h3>}

      <form className="form__modal" onSubmit={handleSubmit(submit)}>
        <div className="form__modal__contenedor__dato">
          <label htmlFor="" className="form__modal__labels">Nombre:</label>
          <input {...register('NOMBRE')} id="NOMBRE" type="text" className="form__modal__input" />
        </div>
        <div className="form__modal__contenedor__dato">
          <label htmlFor="" className="form__modal__labels">Apellido:</label>
          <input {...register('APELLIDO')} id="APELLIDO" type="text" className="form__modal__input" />
        </div>
        <div className="form__modal__contenedor__dato">
          <label htmlFor="" className="form__modal__labels">Nro de Documento:</label>
          <input {...register('NRO_DOCUMENTO')} id="NRO_DOCUMENTO" type="text" className="form__modal__input" />
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
