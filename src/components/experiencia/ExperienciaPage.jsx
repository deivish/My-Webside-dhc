import React from "react";
import "./experienciaPage.css";
import { BsPatchCheckFill } from "react-icons/bs";

const ExperienciaPage = () => {
  return (
    <section id="experiencia">
      <h5>Que habilidades Tengo</h5>
      <h2>My experiencia</h2>

      <div className="container experiencia__container">
        <div className="experiencia__frontend">
          <h3>Frontend Development</h3>
          <div className="experiencia__content">
            <article className="experiencia__details">
              <BsPatchCheckFill className="experiencia__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experimentado</small>
              </div>
            </article>

            <article className="experiencia__details">
              <BsPatchCheckFill className="experiencia__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className="experiencia__details">
              <BsPatchCheckFill className="experiencia__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className="experiencia__details">
              <BsPatchCheckFill className="experiencia__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experimentado</small>
              </div>
            </article>

            <article className="experiencia__details">
              <BsPatchCheckFill className="experiencia__details-icon"/>
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className="experiencia__details">
              <BsPatchCheckFill className="experiencia__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experiencia__primertrabajo">
          <h3>Técnico en sistemas</h3>
          <div className="experiencia__content">
            <article className="experiencia__details">
              <BsPatchCheckFill className="experiencia__details-icon"/>
              <div>
                <h4>Control de acceso con tarjetas HID </h4>
                <small className="text-light">Experimentado</small>
              </div>
            </article>

            <article className="experiencia__details">
              <BsPatchCheckFill className="experiencia__details-icon"/>
              <div>
                <h4>Monitoreo de camaras</h4>
                <small className="text-light">Experimentado</small>
              </div>
            </article>

            <article className="experiencia__details">
              <BsPatchCheckFill className="experiencia__details-icon"/>
              <div>
                <h4>Manejo de inventario de tecnologias</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className="experiencia__details">
              <BsPatchCheckFill className="experiencia__details-icon"/>
              <div>
                <h4>Operativo técnico</h4>
                <small className="text-light">Experimentado</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienciaPage;
