export function Avatares({ user, data, paraordenar, defineseccion }) {

  let renderavatares = [];

  const LISTADOPARAORDENAR = Object.values(user[paraordenar])
    .map(function (el, i) {
      return { index: i, value: el };
    });

  LISTADOPARAORDENAR.sort(function (a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });

  const LISTADOORDENADOS = LISTADOPARAORDENAR.map(function (el) {
    return Object.keys(user[paraordenar])[el.index];
  });

  for (let i = 0; i < LISTADOORDENADOS.length; i++) {
    renderavatares.push(
      <li
        className='item-contribuidores'
        key={"tituloli" + LISTADOORDENADOS[i]}
        onClick={() => window.scrollTo(0, 0)} >
        <button
          onClick={defineseccion}
          numeroseccion={i + 1}
          contribuidor={LISTADOORDENADOS[i]}
          key={"tituloa"}
          user={user.name} >
          <img
            alt={user.name}
            contribuidor={LISTADOORDENADOS[i]}
            key={"usuario" + user.name + user.nombrepublico + LISTADOORDENADOS[i]}
            src={Object.getOwnPropertyDescriptor(data[LISTADOORDENADOS[i]], "avatar").value}
            className="icono-contribuidores" />
        </button>
      </li>
    )
  } return renderavatares;
};
