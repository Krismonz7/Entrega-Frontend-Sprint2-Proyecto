import React from 'react'
import './styleFormularios.css'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HTML from '../images/HTML.png'
import CSS from '../images/CSS.png'
import JS from '../images/js.png'
import FIGMA from '../images/FIGMA.png'
import UX from '../images/UX3.jpg'
export const Formularios = () => {
  const HTMLclick = ()=> window.location.href='https://www.nintendo.com/';

  return (
    <div className='contenedor'>
      <Nav className='menu'>

        <Link className='item' onClick={HTMLclick}>
          HTML
          <div className='imagen'>
          <img src={HTML} alt=''/>
          </div>
        </Link>

        <Link className='item'>
          CSS
          <div className='imagen'>
          <img src={CSS} alt=''/>
          </div>
        </Link>

        <Link className='item'>
          JS
          <div className='imagen'>
          <img src={JS} alt=''/>
          </div>
        </Link>

        <Link className='item'>
          FIGMA
          <div className='imagen'>
          <img src={FIGMA} alt=''/>
          </div>
        </Link>

        <Link className='item'>
          UX
          <div className='imagen'>
          <img src={UX} alt=''/>
          </div>
        </Link>

      </Nav>

    </div>
  )
}
