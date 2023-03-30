import React from "react";
import $ from "jquery";
import { useState, useEffect } from "react";
import Usuario from "../components/Home/Usuario";
import "./styles/home.css";
import ModalCrear from "../components/Home/ModalCrear";
import ModalEliminar from "../components/Home/ModalEliminar";

const Home = () => {
  const [usuarios, setUsuarios] = useState();
  const [editar, setEditar] = useState(false);
  const [eliminar, setEliminar] = useState(false);
  const [COD_PERSONA, setCOD_PERSONA] = useState();

  useEffect(() => {
    getListadoPersonas();
  }, []);

  const getListadoPersonas = () => {
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
  }

  const handleClickCrear = () => {
    const modal = document.querySelector("#modal");
    modal.showModal();
  };

  const handleClickCerrar = () => {
    const modal = document.querySelector("#modal");
    modal.close();
    setEditar(false);
    setEliminar(false);
  };

  return (
    <div>
      <dialog id="modal">
        <button onClick={handleClickCerrar} id="cerrar__modal">
          X
        </button>
        {
          editar == true ? (
            <ModalCrear
              editar={editar} 
              COD_PERSONA={COD_PERSONA}
              getListadoPersonas={getListadoPersonas}
            />
          ) : eliminar == false ?
          (
            <ModalCrear
              editar={editar}
              COD_PERSONA={COD_PERSONA}
              getListadoPersonas={getListadoPersonas}
            />
          ) :
          (
            <ModalEliminar
              COD_PERSONA={COD_PERSONA}
              getListadoPersonas={getListadoPersonas}
              handleClickCerrar={handleClickCerrar}
            />
          )
        }
      </dialog>

      <div className="home">
        <div className="contenedor__titulo">
          <h1 className="titulo">Listado Personas</h1>
          <button onClick={handleClickCrear} className="boton_crear">
            Crear<i className="bx bx-user-circle"></i>
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
              <Usuario
                key={usuario.COD_PERSONA}
                usuario={usuario}
                setEditar={setEditar}
                setEliminar={setEliminar}
                setCOD_PERSONA={setCOD_PERSONA}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
