import { createElement } from 'react';
import { Contribuidorespregunta } from './contribuidorespregunta.js';
export function Respuestas({ user, data, handleClickUsuario, SECCIONES, SECCIONESIDES, nuevo, defineseccion, definepreguntas }) {

  let renderpreguntas = []

  function Textorespuesta({ textorespuesta, i, user }) {
    return createElement(
      'li',
      {
        className: 'item-pregunta',
        style: { color: user.colores["--color-seccion-0" + [i + 1]] },
        key: user.colores["--color-seccion-0" + [i + 1]] + user.name + "respuesta" + user.nombrepublico
      },
      createElement('p', null, textorespuesta),
    );
  }

  function Numeropregunta({ i, j, SECCIONES, user }) {
    return createElement(
      'span',
      {
        className: 'numero-pregunta-respuesta',
        style: { color: user.colores["--color-seccion-0" + [defineseccion]] }
      },
      user.secciones[Object.keys(SECCIONES)[i]].preguntas[j][0]
    );
  }

  function Itempreguntaantes() {
    return createElement(
      'span',
      {
        className: 'item-pregunta-antes',
        style: { backgroundColor: user.colores["--color-seccion-0" + [defineseccion]] }
      }
    );
  }

  function Itempreguntadespues() {
    return createElement(
      'span',
      {
        className: 'item-pregunta-despues',
        style: { color: user.colores["--color-seccion-0" + [defineseccion]] }
      }
    );
  }

  for (let i = 0; i < Object.keys(SECCIONES).length; i++) {

    let renderrespuestasfinal = [];

    renderpreguntas.push(
      <ul className="lista-preguntas" >
        {renderrespuestasfinal}
      </ul>
    )

    function Creagruporespuestaantes({ i, j, defineseccion }) {

      let grupoitemrespuestaantes = [];

      for (let k = 0; k < j; k++) {
        grupoitemrespuestaantes.push(
          <Itempreguntaantes
            defineseccion={defineseccion} j={j} key={k} />
        )
      } return grupoitemrespuestaantes
    }

    function Creagruporespuestadespues({ i, j }) {

      let grupoitemrespuestadespues = [];

      for (let k = 8; k > j; k--) {
        grupoitemrespuestadespues.push(
          <Itempreguntadespues
            defineseccion={defineseccion}
            j={j} key={k} />
        )
      } return grupoitemrespuestadespues
    }

    function Contribuidorpregunta({ i, j, user, definepreguntas, nuevo, SECCIONES }) {
      return createElement(
        'span',
        {
          className: 'avatar-respuesta',
          style: { color: user.colores["--color-seccion-0" + [i + 1]] }
        },
        <Contribuidorespregunta
          user={user}
          data={data}
          nuevo={nuevo}
          paraordenar="contribuidores"
          defineseccion={handleClickUsuario}
          i={i}
          j={j}
          definepreguntas={definepreguntas}
          SECCIONES={SECCIONES} />
      );
    }

    for (let j = 0; j < 9; j++) {

      renderrespuestasfinal.push(
        <>
          <div
            className={"decoracion-pregunta"} >
            <Creagruporespuestaantes
              defineseccion={defineseccion}
              i={i}
              j={j}
              user={user} />
            <div
              className='numeroavatarrespuesta' >
              <Numeropregunta
                i={i}
                j={j}
                user={user}
                SECCIONES={SECCIONES} />
              <Contribuidorpregunta
                i={j}
                j={j}
                nuevo={nuevo}
                definepreguntas={definepreguntas}
                user={user}
                data={data}
                defineseccion={handleClickUsuario} />
            </div>
            <Creagruporespuestadespues
              defineseccion={defineseccion}
              j={j}
              user={user} />
          </div>
          <Textorespuesta
            textorespuesta={user.secciones[Object.keys(SECCIONES)[defineseccion - 1]].preguntas[definepreguntas - 1][2][j][0]}
            user={user}
            SECCIONESIDES={SECCIONESIDES} />
        </>
      )
    }
  } return renderpreguntas[definepreguntas - 1]
};