import React from 'react'
import './stylesNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faStairs,faUser } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  return (
    <>
    <ul className='barra'>
      <li className='iconos'>
        <div className='imagenNav'>
        <FontAwesomeIcon icon={faHome} />
        </div>
        Home</li>
      <li className='iconos'>
      <div className='imagenNav'>
        <FontAwesomeIcon icon={faStairs} />
        </div>
        Estadisticas</li>
      <li className='iconos'>
      <div className='imagenNav'>
        <FontAwesomeIcon icon={faUser} />
        </div>
        Perfil</li>
    </ul>
    </>
  )
}
