import React from "react";
import $ from "jquery";
import { useState, useEffect } from "react";
import Usuario from "../components/Home/Usuario";
import "./styles/home.css";
import ModalCrear from "../components/Home/ModalCrear";

const Home = () => {
  const [usuarios, setUsuarios] = useState();

    useEffect(() => {
      $.ajax({
        url: "https://telemedicina.jakemate.net:7141/api/webservice/metodo",
        data: { _nombreMetodo_: "listarPersonas" },
        method: "POST",
        headers: {
          ContentType: "application/x-www-form-urlencoded",
          Token: "NJKJNTL8SNKH5JJRTS32ZGSIIDPGHLU6KRXLQMLMJJU8MD7EY5TSWMGD2D6Z",
          ApiKey: "ISSTIXZTV53RZURJKTZD3MXVMEW7X3",
        },
        success: (resultados) => {
          setUsuarios(resultados.resultado.Table);
          console.log(resultados);
        },
      });
    }, []);

  const handleClickCrear = () => {
    const modal = document.querySelector("#modal");
    modal.showModal();
  };

  const handleClickCerrar = () => {
    const modal = document.querySelector("#modal");
    const cerrar__modal = document.querySelector('#cerrar__modal');
    modal.close();
  }

  return (
    <div>
      
      <dialog id="modal">
        <button onClick={handleClickCerrar} id="cerrar__modal">X</button>
        <ModalCrear/>
      </dialog>

      <div className="home">
        <div className="contenedor__titulo">
          <h1 className="titulo">Listado Personas</h1>
          <button onClick={handleClickCrear} className="boton_crear">
            Crear +<i className="bx bx-user-circle"></i>
          </button>
        </div>
        <div className="contenedor__listado">
          <div className="contenedor__titulos">
            <div className="contenedor__labels-codigo">
              <label>Código Persona</label>
            </div>
            <div className="contenedor__labels">
              <label>Nombre</label>
            </div>
            <div className="contenedor__labels">
              <label>Apellido</label>
            </div>
            <div className="contenedor__labels">
              <label>Nro. Documento</label>
            </div>
            <div className="contenedor__labels">
              <label>Actions</label>
            </div>
          </div>
          <div className="contenedor__datos">
            {usuarios?.map((usuario) => (
              <Usuario key={usuario.COD_PERSONA} usuario={usuario} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
