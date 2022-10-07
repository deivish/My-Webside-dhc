import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DEIVIS</a>

      <ul className='permalinks'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#perfil">Perfil</a></li>
        <li><a href="#estudios">Estudios</a></li>
        <li><a href="#experiencia">Experiencia</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>

    <div className="footer__socials">
      <a href="https://www.facebook.com/deivis.herrera.98622" target="_blank"><BsFacebook/></a>
      <a href="https://www.instagram.com/deivi_dhc/" target="_blank"><BsInstagram/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy;Deivis H C</small>
    </div>
    </footer>
  )
}

export default Footer