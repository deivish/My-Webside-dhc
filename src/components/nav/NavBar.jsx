import React from 'react'
import './navBar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FaGraduationCap} from 'react-icons/fa'
import {BiBookBookmark} from 'react-icons/bi'
import {BsBriefcase} from 'react-icons/bs'
import {MdPermContactCalendar} from 'react-icons/md'
import { useState } from 'react'

const NavBar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>
    <a href="#" onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
    <a href="#perfil" onClick={() => setActiveNav('#perfil')}className={activeNav === 'perfil' ? 'active' : ''}><AiOutlineUser/></a>
    <a href="#estudios" onClick={() => setActiveNav('#estudios')}className={activeNav === 'estudios' ? 'active' : ''}><FaGraduationCap/></a>
    <a href="#experiencia" onClick={() => setActiveNav('#experiencia')}className={activeNav === 'experiencia' ? 'active' : ''}><BiBookBookmark/></a>
    <a href="#portafolio" onClick={() => setActiveNav('#portafolio')}className={activeNav === 'portafolio' ? 'active' : ''}><BsBriefcase/></a>
    <a href="#contacto" onClick={() => setActiveNav('#contacto')}className={activeNav === 'contacto' ? 'active' : ''}><MdPermContactCalendar/></a>
   </nav>
  )
}

export default NavBar