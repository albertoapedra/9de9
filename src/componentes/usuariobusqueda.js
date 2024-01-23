export function Usuariobusqueda({ user, handleClickUsuario, busquedaUsuarios }) {
  return (
    <>
      <button
        onClick={() => window.scrollTo(0, 0)}
        href="#"
        numeroseccion={busquedaUsuarios[0][2]}
        defineseccion={busquedaUsuarios[0][2]}
        contribuidor={user.name}
        user={user.name}
        className="contenedor-imagen-perfil-busqueda" >
        <img alt={user.name}
          onClick={handleClickUsuario}
          user={user}
          numeroseccion={busquedaUsuarios[0][2]}
          contribuidor={user.name}
          className='imagen-perfil'
          src={user.avatar} />
      </button>
      <>
        <h2 onClick={() => window.scrollTo(0, 0)}>
          <button
           alt={user.name}
           onClick={handleClickUsuario}
           user={user}
           numeroseccion={busquedaUsuarios[0][2]}
           contribuidor={user.name} >
              {user.nombrepublico}
          </button>
        </h2>
      </>
    </>
  );
}