import React from 'react'
import './inicioPage.css'
import CTA from './CTA'
import ME from '../../assets/fot.jpg'
import InicioSocial from './InicioSocial'

const InicioPage = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola Soy</h5>
        <h1>Deivis Herrera</h1>
        <h5 className="text-light"> Desarrollador Frontend con React.js</h5>
        <CTA />
        <InicioSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contacto" className='scroll__down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default InicioPage