export function Titularseccion({ user, SECCIONES, defineseccion, handleClickAtras }) {

  var rendertitulos = [];

  rendertitulos.push(
    <div
    className={"contenedor-titulo-seccion"}
    style={{ backgroundColor: user.colores["--color-seccion-0" + [defineseccion]] }} >
      <h1>
        
          {user.secciones[Object.keys(SECCIONES)[defineseccion - 1]].titulo}
        
      </h1>
      <button onClick={handleClickAtras}
        contribuidor={user.name}
        className="atras"> <img
        src="images/flecha.png"
        alt="flecha"
        onClick={handleClickAtras}
        contribuidor={user.name}
        className="atras" /> </button>
    </div>
  )
  return rendertitulos
};
