import React,{Component} from 'react'
import {Navbar} from '../nav-bar/Navbar'
 import {Formularios} from '../formularios/Formularios'
import '../container/styleContainer.css'
export default class Containerprincipal  extends Component {
  render(){
  return (
      <>
      <div className='all'>
      <h1>Coneccion exitosa</h1>
      <Formularios/>
      <Navbar/>
      </div>
      </>
  )
  }
}
