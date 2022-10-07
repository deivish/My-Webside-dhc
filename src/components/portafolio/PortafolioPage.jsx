import React from 'react'
import './portafolioPage.css'
import IMG1 from '../../assets/todolist.PNG'
import IMG2 from '../../assets/dcmarvel.PNG'
import IMG3 from '../../assets/landing.PNG'
import IMG4 from '../../assets/clima.PNG'


const PortafolioPage = () => {
  return (
    <section id='portafolio'>
      <h5>My trabajo reciente</h5>
      <h2>Portafolio</h2>

      <div className="container portafolio__container">
        <article className='portafolio__item'>
          <div className="portafolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>To Do - List</h3>
           <div className="portafolio__item-cta">
            <a href="https://github.com/deivish/ToDo-Deivis" className='btn' target='_blank'>Github</a>
            <a href="https://to-do-dhc.netlify.app/" className='btn btn-primary' target='_blank'>Proyecto</a>
           </div>
        </article>

        <article className='portafolio__item'>
          <div className="portafolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Aplicación de Héroes Marvel - Dc</h3>
           <div className="portafolio__item-cta">
            <a href="https://github.com/deivish/App-Heroes" className='btn' target='_blank'>Github</a>
            <a href="https://app-heroes-dhc.netlify.app/inicio" className='btn btn-primary' target='_blank'>Proyecto</a>
           </div>
        </article>

        <article className='portafolio__item'>
          <div className="portafolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>My webside</h3>
           <div className="portafolio__item-cta">
            <a href="https://github.com/deivish/My-Webside-dhc" className='btn' target='_blank'>Github</a>
            <a href="https://my-webside-dhc.netlify.app/" className='btn btn-primary' target='_blank'>Proyecto</a>
           </div>
        </article>

        <article className='portafolio__item'>
          <div className="portafolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Aplicación del clima - ciudad</h3>
           <div className="portafolio__item-cta">
            <a href="https://github.com/deivish/App-Clima" className='btn' target='_blank'>Github</a>
            <a href="https://app-clima-dhc.netlify.app/" className='btn btn-primary' target='_blank'>Proyecto</a>
           </div>
        </article>
      </div>
    </section>
  )
}

export default PortafolioPage