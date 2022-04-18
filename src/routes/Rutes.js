import React from 'react'
import QuestionHTML from '../formHTML/FormHTML';
import QuestionCSS from '../formCSS/FormCSS'
import Containerprincipal from '../container/conatiner'
import {BrowserRouter as Router,
  Route,
  Routes} from "react-router-dom";
export default function Rutas() {
  return (
    <Router>
      Hola Shavales...
      <hr/>
      <Routes>
        <Route path='/FormularioHTML' element={<QuestionHTML/>} />
        <Route path='/FormularioCSS' element={<QuestionCSS/>} />
        <Route path='/' element={<Containerprincipal/>} />

      </Routes>
    </Router>
  )
}
