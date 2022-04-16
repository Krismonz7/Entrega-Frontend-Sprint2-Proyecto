import {Containerprincipal} from './container/conatiner';
import QuestionUX from './formUX/FormUX';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <QuestionUX/> 
    </div>
  );
}

export default App;
