import React, { useState } from 'react';
import { Mostrarresultadosbusqueda } from './mostrarresultadosbusqueda';

export function Busqueda({ data, DATOSTODO, handleClickSeccion, handleClickUsuario, handleClickPreguntas, user, SECCIONESCLASES, SECCIONESTITULOS, SECCIONESIDES, SECCIONES}) {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [muestraBusqueda, setMuestraBusqueda] = useState(false);
  const busquedaUsuarios = DATOSTODO.filter(
    user => {
      return (
        user
          .name
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .nombrepublico
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion01.preguntas.map(x => x[1])
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion01.preguntas.map(x => x[2])
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion02.preguntas.map(x => x[1])
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion02.preguntas.map(x => x[2])
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion03.preguntas.map(x => x[1])
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion03.preguntas.map(x => x[2])
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion04.preguntas.map(x => x[1])
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion04.preguntas.map(x => x[2])
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion05.preguntas.map(x => x[1])
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion05.preguntas.map(x => x[2])
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion06.preguntas.map(x => x[1])
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion06.preguntas.map(x => x[2])
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion07.preguntas.map(x => x[1])
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion07.preguntas.map(x => x[2])
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion08.preguntas.map(x => x[1])
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion08.preguntas.map(x => x[2])
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion09.preguntas.map(x => x[1])
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion09.preguntas.map(x => x[2])
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion01.titulo.toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion02.titulo.toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion03.titulo.toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion04.titulo.toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion05.titulo.toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion06.titulo.toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion07.titulo.toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion08.titulo.toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        user
          .secciones.seccion09.titulo.toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      )
    }
  );

  const handleChange = e => {
    setTerminoBusqueda(e.target.value);
    if (e.target.value === "") {
      setMuestraBusqueda(false);
    }
    else {
      setMuestraBusqueda(true);
    }
  };
  const borraBusqueda = () => {
    document.getElementsByClassName("inputBusqueda")[0].value = "";
    setMuestraBusqueda(false)
  }


  let datosbusqueda = [];
  Object.values(busquedaUsuarios)
    .forEach(function (dato) {
      datosbusqueda.push(
        [Object.values(dato.nombrepublico).join(""),
        Object.values(dato.name).join(""),
        Object.values(dato.secciones),
        Object.values(dato.colores)]
      );
    });

  let resultadosbusqueda = [];
  datosbusqueda.forEach(function (dato) {
    resultadosbusqueda.push(
      dato[2].map(x =>
        [dato[0],
        dato[1],
        x.titulo,
        x.id,
        x.class,
        x.preguntas.filter(pregunta => pregunta.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())).map(x => [x[1], x[0]]),
        x.preguntas.map(x => x[2].filter(pregunta => pregunta.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()))),
        dato[3],
        x.preguntas.filter(pregunta => pregunta.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())).map(x => x[0])]
      )
    )
  });

  return (
    <div className="busqueda">
      <input
        className="inputBusqueda"
        type="search"
        placeholder="Sin preguntas no hay respuestas..."
        onChange={handleChange}
      />
      <button onClick={borraBusqueda} className='borrar'>Borrar</button>
      <Mostrarresultadosbusqueda
        handleClickUsuario={handleClickUsuario}
        datosbusqueda={datosbusqueda}
        resultadosbusqueda={resultadosbusqueda}
        busquedaUsuarios={busquedaUsuarios}
        SECCIONESTITULOS={SECCIONESTITULOS}
        SECCIONESCLASES={SECCIONESCLASES}
        SECCIONESIDES={SECCIONESIDES}
        SECCIONES={SECCIONES}
        handleClickSeccion={handleClickSeccion}
        handleClickPreguntas={handleClickPreguntas}
        terminoBusqueda={terminoBusqueda}
        user={user}
        muestraBusqueda={muestraBusqueda}
        data={data} />
    </div>
  );
}