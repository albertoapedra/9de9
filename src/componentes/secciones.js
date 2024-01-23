import { Seccionestitulos } from './../componentes/seccionestitulos.js';

export function Secciones({ user, data, SECCIONESCLASES, SECCIONESIDES, defineseccion }) {

  const SECCIONESTITULOSUSER = [];

  Object.values(Object.values(data[user["name"]].secciones))
    .forEach(function (seccion) {
      SECCIONESTITULOSUSER.push(seccion["titulo"])
    });

  return (
    <div
      className="seccion"  >
      <ul
        className="lista-secciones" >
        <Seccionestitulos
          user={user}
          data={data}
          SECCIONESTITULOSUSER={SECCIONESTITULOSUSER}
          SECCIONESCLASES={SECCIONESCLASES}
          SECCIONESIDES={SECCIONESIDES}
          defineseccion={defineseccion} />
      </ul>
    </div>
  )
};
