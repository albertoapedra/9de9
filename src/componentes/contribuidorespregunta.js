import { Avataresrespuesta } from './../componentes/avataresrespuesta.js';

export function Contribuidorespregunta({ user, data, SECCIONES, defineseccion, numeroseccion, nuevo, definepreguntas, i, j }) {
  return (
    <Avataresrespuesta
      user={user}
      data={data}
      defineseccion={defineseccion}
      definepreguntas={definepreguntas}
      numeroseccion={numeroseccion}
      nuevo={nuevo}
      i={i}
      j={j}
      SECCIONES={SECCIONES} />
  )
};
