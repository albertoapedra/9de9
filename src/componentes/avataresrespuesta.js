export function Avataresrespuesta({user, data, defineseccion, definepreguntas, nuevo, i}) {
  
  let renderavatares = [];

  let listadonuevo = user.secciones["seccion0" + (nuevo)]["preguntas"][definepreguntas - 1][2].map(x => x[1]);

  let ajaja = listadonuevo.reduce((a, v) => ({ ...a, [Object.keys(v)]: Object.values(v)[0]}), {})
  console.log(ajaja)



  let jejeje = Object.values(ajaja).map(function (el, i) {
    return { index: i, value: el };
  });
  
  jejeje.sort(function (a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });

  const LISTADOORDENADOS = jejeje.map(function (el) {
    return Object.keys(ajaja)[el.index];
  });

  renderavatares.push(
    <button
    onClick={defineseccion}
    numeroseccion={i + 1}
    contribuidor={LISTADOORDENADOS[i]}
    key={"tituloa" }
    user={user.name} >
      <img
      onClick={() => window.scrollTo(0, 0)}
      alt={user.name}
      contribuidor={LISTADOORDENADOS[i]}
      key={"usuario" + user.name + user.nombrepublico + LISTADOORDENADOS[i] }
      src={Object.getOwnPropertyDescriptor(data[LISTADOORDENADOS[i]], "avatar").value}
      className="icono-contribuidores" />
    </button>
  );

  return renderavatares;
};
