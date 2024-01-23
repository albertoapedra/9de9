export function Titularpregunta({ user, SECCIONES, handleClickSeccion, definepreguntas, definerespuestas, defineseccion }) {

   var rendertitulos = [];

   rendertitulos.push(
      <div
      className={"contenedor-titulo-pregunta"}
      style={{ backgroundColor: user.colores["--color-seccion-0" + [definepreguntas]] }} >
         <h1>
            {user.secciones[Object.keys(SECCIONES)[defineseccion - 1]].preguntas[definerespuestas - 1][0]
            + ". "
            + user.secciones[Object.keys(SECCIONES)[defineseccion - 1]].preguntas[definerespuestas - 1][1]}
         </h1>
         <button
         numeroseccion={definepreguntas}
         href="#"
         onClick={handleClickSeccion}
         name={user.name}
         definepreguntas={definepreguntas}
         contribuidor={user.name} >
            {user.secciones[Object.keys(SECCIONES)[defineseccion - 1]].titulo}
         </button>
      </div>
   );

   return rendertitulos
};
