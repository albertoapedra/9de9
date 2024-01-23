import { Usuariobusqueda } from './usuariobusqueda';
export function Mostrarresultadosbusqueda({ defineseccion, resultadosbusqueda, terminoBusqueda, handleClickSeccion, handleClickPreguntas, muestraBusqueda, busquedaUsuarios, data, handleClickUsuario }) {
  if (muestraBusqueda) {
    let supertodofinal = resultadosbusqueda
      .map(x => x.filter(pregunta => pregunta.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())));
    return (
      <>
        {supertodofinal.map(x =>
          <div key={x[0]} >
            <Usuariobusqueda
              busquedaUsuarios={busquedaUsuarios}
              user={data[x[0][1]]}
              handleClickUsuario={handleClickUsuario} />
            <ul
              className="lista-secciones-busqueda" >
              {x
                .map(x =>
                  <li
                    className={'fondo-seccion tamano-seccion ' + x[4]}
                    style={{ backgroundColor: x[7][x[3] + 2] }}
                    onClick={() => window.scrollTo(0, 0)}
                    key={x[4] + x[3] + x[1]} >
                    <button
                      onClick={handleClickSeccion}
                      defineseccion={defineseccion}
                      numeroseccion={x[3]}
                      contribuidor={x[1]} >
                      {x[2]}
                    </button>
                  </li>
                )
              }
            </ul>
            <ul>
              {x
                .map(x => x[5]
                  .map(y =>
                    <li className={'item-pregunta'}
                      style={{ backgroundColor: x[7][x[3] + 2], borderRadius: "9px" }}
                      onClick={() => window.scrollTo(0, 0)}
                      key={x[3] + y[1] + y[1] + x[3] + x[1] + x[2]}>
                      <button className='pregunta-busqueda'
                        onClick={handleClickPreguntas}
                        defineseccion={x[3]}
                        definerespuestas={y[1]}
                        definetitularpregunta={y[1]}
                        numeroseccion={x[3]}
                        contribuidor={x[1]} >
                        {y[0]}
                      </button>
                    </li>
                  )
                )
              }
            </ul>
          </div>)
        }
      </>
    )
  } return null;
}