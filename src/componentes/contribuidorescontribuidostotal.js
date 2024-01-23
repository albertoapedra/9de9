import { Avatares } from './../componentes/avatares.js';

export function Contribuidorescontribuidostotal({ user, data, paraordenar, defineseccion, tituloh4 }) {
  return (
    <div
      className="contribuidores">
      <div
        className="contenedor-lista-contribuidores">
        <h4>{tituloh4}</h4>
        <ul
          className="lista-contribuidores">
          <Avatares
            user={user}
            data={data}
            paraordenar={paraordenar}
            defineseccion={defineseccion} />
        </ul>
      </div>
    </div>
  )
};
