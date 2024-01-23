import { createElement } from 'react';
export function Preguntas({ user, SECCIONES, SECCIONESIDES, definepreguntas, definerespuestas, }) {

  let renderpreguntas = [];

  function Textopregunta({ textopregunta, i, j, SECCIONESIDES, user }) {
    return createElement(
      'li',
      {
        className: 'item-pregunta',
        style: { color: user.colores["--color-seccion-0" + [i + 1]] },
        key: user.colores["--color-seccion-0" + [i + 1]] + user.name + "pregunta" + user.nombrepublico,
        onClick: () => window.scrollTo(0, 0)
      },
      createElement('button', { onClick: definerespuestas, numeroseccion: SECCIONESIDES[i], contribuidor: user.name, definetitularpregunta: j + 1 }, textopregunta)
    );
  }

  function Numeropregunta({ i, j, SECCIONES, user }) {
    return createElement(
      'span',
      {
        className: 'numero-pregunta-pregunta',
        style: { color: user.colores["--color-seccion-0" + [i + 1]] }
      },
      user.secciones[Object.keys(SECCIONES)[i]].preguntas[j][0]

    );
  }

  function Itempreguntaantes({ i }) {
    return createElement(
      'span',
      {
        className: 'item-pregunta-antes',
        style: { backgroundColor: user.colores["--color-seccion-0" + [i + 1]] }
      }
    );
  }

  function Itempreguntadespues({ i }) {
    return createElement(
      'span',
      {
        className: 'item-pregunta-despues',
        style: { color: user.colores["--color-seccion-0" + [i + 1]] }
      }
    );
  }

  for (let i = 0; i < Object.keys(SECCIONES).length; i++) {

    let renderpreguntasfinal = [];

    renderpreguntas.push(
      <ul className="lista-preguntas" >
        {renderpreguntasfinal}
      </ul>
    )

    function Creagrupopreguntaantes({ i, j }) {

      let grupoitempreguntaantes = [];

      for (let k = 0; k < j; k++) {
        grupoitempreguntaantes.push(
          <Itempreguntaantes i={i} j={j} />
        )
      } return grupoitempreguntaantes
    }

    function Creagrupopreguntadespues({ i, j }) {

      let grupoitempreguntadespues = [];

      for (let k = 8; k > j; k--) {
        grupoitempreguntadespues.push(
          <Itempreguntadespues i={i} j={j} />
        )
      } return grupoitempreguntadespues
    }

    for (let j = 0; j < 9; j++) {

      renderpreguntasfinal.push(
        <>
          <div className={"decoracion-pregunta"} style={{ color: user.colores["--color-seccion-0" + [j + 1]] }} >
            <Creagrupopreguntaantes
              i={i}
              j={j}
              user={user} />
            <Numeropregunta
              i={i}
              j={j}
              user={user}
              SECCIONES={SECCIONES} />
            <Creagrupopreguntadespues
              i={i}
              j={j}
              user={user} />
          </div>
          <Textopregunta
            textopregunta={user.secciones[Object.keys(SECCIONES)[i]].preguntas[j][1]}
            i={i}
            j={j}
            user={user}
            SECCIONESIDES={SECCIONESIDES} />
        </>
      );
    }
  } return renderpreguntas[definepreguntas - 1]
};