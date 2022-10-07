import React from 'react'
import "./perfilPage.css"
import ME from "../../assets/me2.jpg"
// import { FaAward } from "react-icons/fa";

const PerfilPage = () => {
  return (
    <section id="perfil">
      <h5>¡Conozcámonos!</h5>
      <h2>Perfil</h2>

      <div className="container perfil__container">
        <div className="perfil__me">
          <div className="perfil__me-image">
            <img src={ME} alt="perfil Image" />
          </div>
        </div>

        <div className="perfil__content">
          
          {/* <div className="perfil__cards">
            <article className="perfil__card">
              <FaAward className="perfil__icon" />
              <h5>Unamos Fuerzas</h5>
              <small>El mundo necesita Super heroes</small>
            </article>
          </div> */}

          <p>
            Tecnólogo en sistemas con capacidades eficientes para la aplicación
            de valores, actitud disciplina y productividad. Buena actitud para
            el trabajo en equipo, dispuesto a aprender lo máximo y aplicar
            efectivamente todos mis conocimientos.
             Siendo una persona empática, disciplinada,
            honesta, puntual, responsable, proactiva, comprometida y muy
            creativa. 
            Como profesional considerado capaz, capaz de trabajar bajo
            presión y dispuesto a cumplir con las distintas obligaciones. Y con
            actitud para aprender y fortalecer mis habilidades como
            profesional y persona. 
            Ser positivo y resiliente me ha ayudado a lo
            largo de mi vida a sobrellevar cualquier situación y frente a
            cualquier obstáculo destructivo; y he aprendido a responder
            exitosamente de situaciones difíciles, buscando nuevas opciones para
            lograr los objetivos. 
            "al que cree todo le es posible."  
          </p>
          <a href="#contacto" className="btn btn-primary">
            {" "}
            Hablemos{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PerfilPage;
