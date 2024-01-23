
export function Redes({ user }) {
  return (
    <ul className="lista-redes-sociales">
      <li className="item-redes-sociales1"><a href={user.redes.facebook} target="_blank" rel="noreferrer"><img src="images/redes/facebook.svg" className="icono-redes" alt="icono de facebook" /></a></li>
      <li className="item-redes-sociales2"><a href={user.redes.github} target="_blank" rel="noreferrer"><img src="images/redes/github.svg" className="icono-redes" alt="icono de github" /></a></li>
      <li className="item-redes-sociales3"><a href={user.redes.google} target="_blank" rel="noreferrer"><img src="images/redes/google.svg" className="icono-redes" alt="icono de google" /></a></li>
      <li className="item-redes-sociales4"><a href={user.redes.instagram} target="_blank" rel="noreferrer"><img src="images/redes/instagram.svg" className="icono-redes" alt="icono de instagram" /></a></li>
      <li className="item-redes-sociales5"><a href={user.redes.linkedin} target="_blank" rel="noreferrer"><img src="images/redes/linkedin.svg" className="icono-redes" alt="icono de linkedin" /></a></li>
      <li className="item-redes-sociales6"><a href={user.redes.slack} target="_blank" rel="noreferrer"><img src="images/redes/slack.svg" className="icono-redes" alt="icono de slack" /></a></li>
      <li className="item-redes-sociales7"><a href={user.redes.twitch} target="_blank" rel="noreferrer"><img src="images/redes/twitch.svg" className="icono-redes" alt="icono de twitch" /></a></li>
      <li className="item-redes-sociales8"><a href={user.redes.x} target="_blank" rel="noreferrer"><img src="images/redes/twitter.svg" className="icono-redes" alt="icono de x" /></a></li>
      <li className="item-redes-sociales9"><a href={user.redes.youtube} target="_blank" rel="noreferrer"><img src="images/redes/youtube.svg" className="icono-redes" alt="icono de youtube" /></a></li>
    </ul>
  )
};
