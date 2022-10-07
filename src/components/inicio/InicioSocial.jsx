import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const InicioSocial = () => {
  return (
    <div className='inicio__social'>
        <a href="https://www.linkedin.com/in/deivis-herrera-cortes-523243247/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/deivish" target="_blank"><BsGithub/></a>
        <a href="#perfil">♡</a>
    </div>
  )
}

export default InicioSocial