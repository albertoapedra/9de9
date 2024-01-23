export function Publicidadpregunta({ user, nuevo }) {
  let publicidadreal = []
  for (let j = 0; j < 9; j++) {
        publicidadreal.push(
          <li className="item-publicidad" style={{ backgroundColor: user.colores["--color-seccion-0" + (nuevo)] }}>
            <a href={user.secciones["seccion0" + (nuevo)]["publicidadenlaces"][j]} target="_blank" rel="noreferrer">
              {user.secciones["seccion0" + (nuevo)]["publicidad"][j]}
            </a>
          </li>
        )
      }
  return (
    <ul className="modulo-publicidad">
      {publicidadreal} 
    </ul>
  )
};