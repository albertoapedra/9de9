export function Logo({ user, handleClickUsuario }) {
  return (
    <div
      className="logo-nueves-nombre">
      <div
        className="logo-numero-nueves">
        <button
          onClick={handleClickUsuario}
          contribuidor="userglobal"
          numeroseccion="0" >
          <img
            src="images/logo-9de9.svg"
            alt="logotipo de 9de9"
            className="imagen-logo"
            name="userglobal"
            contribuidor="userglobal"
            numeroseccion="0" />
        </button>
        <div
          className="numero-de-nueves">
          <b>
            {user.numerodenueves}
            <br />
            NUEVES
          </b>
        </div>
      </div>
      <div
        className="nombre-perfil">
        <img
          src="images/nueve-nombre-perfil.svg"
          alt="imagen de un 9 decorativo para el nombre del perfil" />
        <button
          onClick={handleClickUsuario}
          contribuidor={user.name} >
          {user.nombrepublico}
        </button>
      </div>
    </div>
  )
};
