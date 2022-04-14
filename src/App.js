import {Containerprincipal} from './container/conatiner';
import QuestionJS from "./formJS/FromJs";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <QuestionJS /> 
    </div>
  );
}

export default App;
