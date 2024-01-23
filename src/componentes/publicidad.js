export function Publicidad({ user, nuevo }) {
  let publicidadreal = []
  for (let j = 0; j < 9; j++) {
        publicidadreal.push(
          <li className="item-publicidad" style={{ backgroundColor: user.colores["--color-seccion-0" + [j + 1]] }}>
            <a href={user["publicidadenlaces"][j]} target="_blank" rel="noreferrer">
              {user["publicidad"][j]}
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