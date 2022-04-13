import React from 'react'
import './stylesNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  return (
    <>
    <ul className='barra'>
      <li className='iconos'>
        <div className='imagenNav'>
        <FontAwesomeIcon icon={faHome} />
        </div>
        Home</li>
      <li className='iconos'>Estadisticas</li>
      <li className='iconos'>Perfil</li>
    </ul>
    </>
  )
}
