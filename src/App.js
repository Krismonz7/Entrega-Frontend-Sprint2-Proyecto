import {Containerprincipal} from './container/conatiner';
import QuestionFigma from './formFigma/FormFigma';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <QuestionFigma/> 
    </div>
  );
}

export default App;
