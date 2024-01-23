export function Seccionestitulos({ user, SECCIONESTITULOSUSER, SECCIONESCLASES, SECCIONESIDES, defineseccion }) {

  var rendertitulos = [];

  for (let i = 0; i < SECCIONESTITULOSUSER.length; i++) {
    rendertitulos.push(
      <li
        className={'fondo-seccion tamano-seccion ' + SECCIONESCLASES[i]}
        key={"tituloli" + user.name + SECCIONESTITULOSUSER[i]}
        style={{ backgroundColor: user.colores["--color-seccion-0" + [i + 1]] }} >
        <button
          onClick={defineseccion}
          numeroseccion={SECCIONESIDES[i]}
          href="#"
          contribuidor={user.name}
          key={"tituloa" + user.name + SECCIONESTITULOSUSER[i]} >
          {SECCIONESTITULOSUSER[i]}
        </button>
      </li>);
  } return rendertitulos
};
