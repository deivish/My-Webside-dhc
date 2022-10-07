import React from 'react'
import './contactoPage.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const ContactoPage = () => {
  const form = useRef ();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p5c6jqo', 'template_7umunfk', form.current, 'IDgnYYJDtsiLV26m4')

      e.target.reset()

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contacto'>
      <h5>Contactame</h5>
      <h2>Contacto</h2>

      <div className="container contacto__container">
        <div className="contacto__options">
          <article className="contacto__option">
          <BsWhatsapp className='contacto__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+57 321-770-38-52</h5>
            <a href="https://api.whatsapp.com/send?phone+573217703852" target="_blank">Envia un mensaje</a>
          </article>

          <article className="contacto__option">
            <BsInstagram className='contact__option-icon'/>
            <h4>Instragram</h4>
            <h5>@deivi_dhc</h5>
            <a href="https://www.instagram.com/deivi_dhc/" target="_blank">Envia un mensaje</a>
          </article>

          <article className="contacto__option">
          <MdOutlineMail className='contacto__option-icon'/>
            <h4>Gmail</h4>
            <h5>herrera.15cortes@gmail.com</h5>
            <a href="mailto:herrera.15cortes@gmail.com" target="_blank">Envia un mensaje</a>
          </article>
        </div>
        {/* fin de opciones de contacto */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nombre' required />
          <input type="email" name='email' placeholder='Correo electronico' required/>
          <textarea name="message" rows="7" placeholder='Deja tú mensaje...' required></textarea>
          <button type='submit' className='btn btn-primary'> Enviar mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default ContactoPage