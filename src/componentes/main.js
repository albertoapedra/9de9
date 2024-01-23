import React, { useState } from 'react';
import { Logo } from './logo.js';
import { Avatar } from './avatar.js';
import { Descripcion } from './descripcion.js';
import { Redes } from './redes.js';
import { Secciones } from './secciones.js';
import { Contribuidorescontribuidostotal } from './contribuidorescontribuidostotal.js';
import { Preguntas } from './preguntas.js';
import { Titularseccion } from './titularseccion.js';
import { Titularpregunta } from './titularpregunta.js';
import { Respuestas } from './respuestas.js';
import data from './../data/data.json';
import { Publicidad } from './publicidad.js';
import { Publicidadpregunta } from './publicidadpregunta.js';
import { Busqueda } from './busqueda.js';




const DATOSTODO = Object.values(data);
const SECCIONESTITULOS = [];
const SECCIONESCLASES = [];
const SECCIONESIDES = [];
const SECCIONES = Object.values(data)[0].secciones;
Object.values(Object.values(data)[0].secciones)
  .forEach(function (seccion) {
    SECCIONESTITULOS.push(seccion["titulo"])
  });
Object.values(Object.values(data)[0].secciones)
  .forEach(function (seccion) {
    SECCIONESCLASES.push(seccion["class"])
  });
Object.values(Object.values(data)[0].secciones)
  .forEach(function (seccion) {
    SECCIONESIDES.push(seccion["id"])
  });

export function Main({ data }) {

  const handleClickSeccion = (event, user = data[event.target.getAttribute('contribuidor')]) => {
    setestado({
      logo:
        <Logo
          user={user}
          handleClickUsuario={handleClickUsuario} />,
      avatar:
        <div
          className='titulo-seccion'>
          <Publicidad user={user}
          defineseccion={event.target.getAttribute('numeroseccion')}
          nuevo={event.target.getAttribute('numeroseccion')} />
          <Titularseccion
            SECCIONES={SECCIONES}
            defineseccion={event.target.getAttribute('numeroseccion')}
            user={user}
            handleClickAtras={handleClickAtras} />
        </div>,
      descripcion: "",
      redes:
        <Avatar
          user={user}
          handleClickUsuario={handleClickUsuario} />,
      contribuidores:
        <Contribuidorescontribuidostotal
          tituloh4="CONTRIBUIDORES"
          user={user} data={data}
          paraordenar="contribuidores"
          defineseccion={handleClickUsuario} />,
      contribuidos:
        <Contribuidorescontribuidostotal
          tituloh4="CONTRIBUIDOS"
          user={user}
          data={data}
          paraordenar="contribuidos"
          defineseccion={handleClickUsuario} />,
      busqueda:
        <Busqueda
          data={data}
          user={data.userglobal}
          SECCIONESIDES={SECCIONESIDES}
          SECCIONESCLASES={SECCIONESCLASES}
          SECCIONES={SECCIONES}
          DATOSTODO={DATOSTODO}
          handleClickSeccion={handleClickSeccion}
          handleClickUsuario={handleClickUsuario}
          handleClickPreguntas={handleClickPreguntas}
          secciones={data.userglobal.secciones} />,
      seccion:
        <Preguntas
          SECCIONES={SECCIONES}
          SECCIONESIDES={SECCIONESIDES}
          definepreguntas={event.target.getAttribute('numeroseccion')}
          definerespuestas={handleClickPreguntas}
          defineseccion={event.target.getAttribute('numeroseccion')}
          secciones={user.secciones}
          user={user} />,
      grid: "seccion"
    });
  }
  const handleClickUsuario = (event, user = data[event.target.getAttribute('contribuidor')]) => {
    setestado({
      logo:
        <Logo
          user={user}
          handleClickUsuario={handleClickUsuario} />,
      avatar:
        <Avatar
          user={user}
          handleClickUsuario={handleClickUsuario} />,
      descripcion:
        <Descripcion
          user={user} />,
      redes:
        <Redes
          user={user} />,
      contribuidores:
        <Contribuidorescontribuidostotal
          tituloh4="CONTRIBUIDORES"
          user={user}
          data={data}
          paraordenar="contribuidores"
          defineseccion={handleClickUsuario} />,
      contribuidos:
        <Contribuidorescontribuidostotal
          tituloh4="CONTRIBUIDOS"
          user={user}
          data={data}
          paraordenar="contribuidos"
          defineseccion={handleClickUsuario} />,
      busqueda:
        <Busqueda
          data={data}
          user={data.userglobal}
          SECCIONESIDES={SECCIONESIDES}
          SECCIONESCLASES={SECCIONESCLASES}
          SECCIONES={SECCIONES}
          DATOSTODO={DATOSTODO}
          handleClickSeccion={handleClickSeccion}
          handleClickUsuario={handleClickUsuario}
          handleClickPreguntas={handleClickPreguntas}
          secciones={data.userglobal.secciones}
 />,
      seccion:
        <Secciones
          user={user}
          data={data}
          SECCIONESCLASES={SECCIONESCLASES}
          SECCIONESIDES={SECCIONESIDES}
          defineseccion={handleClickSeccion} />,
      grid: "general"
    });
  }
  const handleClickPreguntas = (event, user = data[event.target.getAttribute('contribuidor')]) => {
    setestado({
      logo:
        <Logo
          user={user}
          handleClickUsuario={handleClickUsuario} />,
      avatar:
        <div
          className='titulo-seccion'>
          <Publicidadpregunta
            user={user}
            defineseccion={event.target.getAttribute('numeroseccion')}
            nuevo={event.target.getAttribute('numeroseccion')} />
          <Titularpregunta
            SECCIONESIDES={SECCIONESIDES}
            SECCIONES={SECCIONES}
            definepreguntas={event.target.getAttribute('numeroseccion')}
            definerespuestas={event.target.getAttribute('definetitularpregunta')}
            defineseccion={event.target.getAttribute('numeroseccion')}
            handleClickSeccion={handleClickSeccion}
            secciones={user.secciones}
            user={user}
            contribuidor={user.name} />
        </div>,
      redes:
        <Avatar
          user={user}
          handleClickUsuario={handleClickUsuario} />,
      descripcion:
        <Publicidadpregunta
          user={user}
          defineseccion={event.target.getAttribute('numeroseccion')}
          nuevo={event.target.getAttribute('numeroseccion')} />,
      contribuidores:
        <Contribuidorescontribuidostotal
          tituloh4="CONTRIBUIDORES"
          user={user}
          data={data}
          paraordenar="contribuidores"
          defineseccion={handleClickUsuario} />,
      contribuidos:
        <Contribuidorescontribuidostotal
          tituloh4="CONTRIBUIDOS"
          user={user}
          data={data}
          paraordenar="contribuidos"
          defineseccion={handleClickUsuario} />,
      busqueda:
        <Busqueda
          data={data}
          user={data.userglobal}
          SECCIONESIDES={SECCIONESIDES}
          SECCIONESCLASES={SECCIONESCLASES}
          SECCIONES={SECCIONES}
          DATOSTODO={DATOSTODO}
          handleClickSeccion={handleClickSeccion}
          handleClickUsuario={handleClickUsuario}
          handleClickPreguntas={handleClickPreguntas}
          secciones={data.userglobal.secciones} />,
      seccion:
        <Respuestas
          SECCIONES={SECCIONES}
          SECCIONESIDES={SECCIONESIDES}
          definepreguntas={event.target.getAttribute('definetitularpregunta')}
          defineseccion={event.target.getAttribute('numeroseccion')}
          nuevo={event.target.getAttribute('numeroseccion')}
          inicioseccion={handleClickSeccion}
          secciones={user.secciones}
          user={user}
          contribuidor={user.name}
          handleClickUsuario={handleClickUsuario}
          data={data} />,
      grid: "respuestas"
    });
  };
  const handleClickAtras = (event, user = data[event.target.getAttribute('contribuidor')]) => {
    setestado({
      logo:
        <Logo
          user={user}
          handleClickUsuario={handleClickUsuario} />,
      avatar:
        <Avatar
          user={user} />,
      descripcion:
        <Descripcion
          user={user} />,
      redes:
        <Redes
          user={user} />,
      contribuidores:
        <Contribuidorescontribuidostotal
          tituloh4="CONTRIBUIDORES"
          user={user}
          data={data}
          paraordenar="contribuidores"
          defineseccion={handleClickUsuario} />,
      contribuidos:
        <Contribuidorescontribuidostotal
          tituloh4="CONTRIBUIDOS"
          user={user}
          data={data}
          paraordenar="contribuidos"
          defineseccion={handleClickUsuario} />,
      busqueda:
        <Busqueda
          data={data}
          user={data.userglobal}
          SECCIONESIDES={SECCIONESIDES}
          SECCIONESCLASES={SECCIONESCLASES}
          SECCIONES={SECCIONES}
          DATOSTODO={DATOSTODO}
          handleClickSeccion={handleClickSeccion}
          handleClickUsuario={handleClickUsuario}
          handleClickPreguntas={handleClickPreguntas}
          secciones={data.userglobal.secciones} />,
      seccion:
        <Secciones
          user={user}
          data={data}
          SECCIONESCLASES={SECCIONESCLASES}
          SECCIONESIDES={SECCIONESIDES}
          defineseccion={handleClickSeccion} />,
      grid: "general"
    });
  }
  let [Estado, setestado] = useState({
    logo:
      <Logo
        user={data.userglobal}
        handleClickUsuario={handleClickUsuario} />,
    avatar:
      <Avatar
        user={data.userglobal}
        handleClickUsuario={handleClickUsuario} />,
    descripcion:
      <Descripcion
        user={data.userglobal} />,
    redes:
      <Redes
        user={data.userglobal} />,
    contribuidores:
      <Contribuidorescontribuidostotal
        tituloh4="CONTRIBUIDORES"
        user={data.userglobal}
        data={data}
        paraordenar="contribuidores"
        defineseccion={handleClickUsuario} />,
    contribuidos:
      <Contribuidorescontribuidostotal
        tituloh4="CONTRIBUIDOS"
        user={data.userglobal}
        data={data}
        paraordenar="contribuidos"
        defineseccion={handleClickUsuario} />,
    busqueda:
      <Busqueda
        data={data}
        user={data.userglobal}
        SECCIONESIDES={SECCIONESIDES}
        SECCIONESCLASES={SECCIONESCLASES}
        SECCIONES={SECCIONES}
        DATOSTODO={DATOSTODO}
        handleClickSeccion={handleClickSeccion}
        handleClickUsuario={handleClickUsuario}
        handleClickPreguntas={handleClickPreguntas}
        secciones={data.userglobal.secciones} />,
    seccion:
      <Secciones
        user={data.userglobal}
        data={data}
        SECCIONESTITULOS={SECCIONESTITULOS}
        SECCIONESCLASES={SECCIONESCLASES}
        SECCIONESIDES={SECCIONESIDES}
        defineseccion={handleClickSeccion} />,
    grid: "general"
  });
  return (
    <div className={"grid-container-" + Estado.grid} id="inicio">
      <div className="logo">
        {Estado.logo}
      </div>
      {Estado.avatar}
      {Estado.descripcion}
      <div className="redes">
        {Estado.redes}
      </div>
      <div className="contri">
        {Estado.contribuidores}
        {Estado.contribuidos}
      </div>
      <div className="contenido" id='contenedor' >
        {Estado.seccion}
      </div>
      <div className="busqueda" id='busqueda' >
        {Estado.busqueda}
      </div>
    </div>
  );
}

export default Main;
