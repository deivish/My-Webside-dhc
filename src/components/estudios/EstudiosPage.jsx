import React from 'react'
import './estudiosPage.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'


// import Swiper core and required modules
import {  Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const EstudiosPage = () => {
  return (
    <section id='estudios'>
      <h5>logros</h5>
      <h2>Mis estudios</h2>

      <Swiper className="container estudios__container" 
      // install Swiper modules
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation = {{ clickable: true }}
      pagination={{ clickable: true }}>

        <SwiperSlide className="estudio">
            <div className="estudio__avatar">
              <img src={AVTR1} alt="Avatar uno" />
             
            </div>
            <h5 className='estudio__name'>Técnico en sistemas</h5>
              <small className='estudio__review'>
                Certificado el día 16 del mes de octubre del año 2020
              </small>
        </SwiperSlide>

        <SwiperSlide className="estudio">
            <div className="estudio__avatar">
              <img src={AVTR2} alt="Avatar uno" />
             
            </div>
            <h5 className='estudio__name'>Técnico profesional en sistemas</h5>
              <small className='estudio__review'>
                Iniciado en febrero del 2019 y finalizo en noviembre del 2021 
              </small>
        </SwiperSlide>

        <SwiperSlide className="estudio">
            <div className="estudio__avatar">
              <img src={AVTR2} alt="Avatar uno" />
             
            </div>
            <h5 className='estudio__name'>Tecnólogo en Sistemas</h5>
              <small className='estudio__review'>
                inicio el 1 de febrero y finalizo en nobiembre 28 del 2022
              </small>
        </SwiperSlide>

        <SwiperSlide className="estudio">
            <div className="estudio__avatar">
              <img src={AVTR3} alt="Avatar uno" />
             
            </div>
            <h5 className='estudio__name'>Diplomado en Reactjs</h5>
              <small className='estudio__review'>
                Certificado el día 15 del mes de octubre del año 2022
              </small>
        </SwiperSlide>

        <SwiperSlide className="estudio">
            <div className="estudio__avatar">
              <img src={AVTR1} alt="Avatar uno" />
             
            </div>
            <h5 className='estudio__name'>Desarrollo de habilidades digitales para la construcción de contenido digital</h5>
              <small className='estudio__review'>
                Certicicado el día 30 del mes de enero del año 2022
                con una intensidad horaria de (48) horas realizadas.
              </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default EstudiosPage