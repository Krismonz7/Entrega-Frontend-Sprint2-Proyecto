import React from 'react'
import './styleFormularios.css'
import {Nav} from 'react-bootstrap'
import HTML from '../images/HTML.png'
import CSS from '../images/CSS.png'
import JS from '../images/js.png'
import FIGMA from '../images/FIGMA.png'
import UX from '../images/UX3.jpg'

export const Formularios =()=>{
  const RedirijeHTML = ()=>{
    window.location.href='/FormularioHTML'
  }
  const RedirijeCSS = ()=>{
    window.location.href='/FormularioCSS'
  }
  const RedirijeFigma = ()=>{
    window.location.href='/FormularioFigma'
  }
  const RedirijeJS = ()=>{
    window.location.href='/FormularioJS'
  }
  const RedirijeUX = ()=>{
    window.location.href='/FormularioUX'
  }
  return (
    <div className='contenedor'>
      <Nav className='menu'>

        <div className='item' onClick={RedirijeHTML}>
          HTML
          <div className='imagen'>
          <img src={HTML} alt=''/>
          </div>
        </div>

        <div className='item' onClick={RedirijeCSS}>
          CSS
          <div className='imagen'>
          <img src={CSS} alt=''/>
          </div>
        </div>

        <div className='item' onClick={RedirijeJS}>
          JS
          <div className='imagen'>
          <img src={JS} alt=''/>
          </div>
        </div>

        <div className='item' onClick={RedirijeFigma}>
          FIGMA
          <div className='imagen'>
          <img src={FIGMA} alt=''/>
          </div>
        </div>

        <div className='item' onClick={RedirijeUX}>
          UX
          <div className='imagen'>
          <img src={UX} alt=''/>
          </div>
        </div>

      </Nav>

    </div>
  )
  
}
