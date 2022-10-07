import React from 'react'
import InicioPage from './components/inicio/InicioPage'
import NavBar from './components/nav/NavBar'
import PerfilPage from './components/perfil/PerfilPage'
import EstudioPage from './components/estudios/EstudiosPage'
import ExperienciaPage from './components/experiencia/ExperienciaPage'
import PortafolioPage from './components/portafolio/PortafolioPage'
import ContactoPage from './components/contacto/ContactoPage'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <InicioPage/>
        <NavBar/>
        <PerfilPage/>
        <EstudioPage/>
        <ExperienciaPage/>
        <PortafolioPage/>
        <ContactoPage/>
        <Footer/>
    </>
  )
}

export default App