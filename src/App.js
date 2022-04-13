import {Containerprincipal} from './container/conatiner';
import Question from "./formHTML/FormHTML";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Question /> 
    </div>
  );
}

export default App;
