import React from 'react'
import QuestionHTML from '../formHTML/FormHTML'
import QuestionCSS from '../formCSS/FormCSS'
import QuestionUX from '../formUX/FormUX'
import QuestionJS from '../formJS/FormJs'
import QuestionFigma from '../formFigma/FormFigma'
import Containerprincipal from '../container/conatiner'
import {BrowserRouter as Router,
  Route,
  Routes} from "react-router-dom";
export default function Rutas() {
  return (
    <Router>
      <Routes>
        <Route path='/FormularioHTML' element={<QuestionHTML/>} />
        <Route path='/FormularioCSS' element={<QuestionCSS/>} />
        <Route path='/FormularioFigma' element={<QuestionFigma/>} />
        <Route path='/FormularioJS' element={<QuestionJS/>} />
        <Route path='/FormularioUX' element={<QuestionUX/>} />
        <Route path='/' element={<Containerprincipal/>} />
      </Routes>
    </Router>
  )
}
