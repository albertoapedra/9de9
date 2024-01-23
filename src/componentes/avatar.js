export function Avatar({ user, handleClickUsuario }) {
  return (
    <div
      className="foto-perfil">
      <div
        className="contenedor-imagen-perfil">
        <img
          src={user.avatar}
          className="imagen-perfil"
          onClick={handleClickUsuario}
          contribuidor={user.name} alt={"imagen de perfil de" + user.name } />
      </div>
    </div>
  )
};
