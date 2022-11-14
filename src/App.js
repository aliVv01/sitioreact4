import { useState } from "react";
import AppForm from "./componente/AppForm";

function App() {
  //////////////////////   READ fnRead   //////////////////////
  const [idActual, setIdActual] = useState("");
  const fnRead = (e) => {
     console.log("Lectura a base de datos");
  };
  //////////////////////   DELETE fnDelete  //////////////////////

 
  return (
    <div > 
      <h1>App.js</h1>
      <AppForm {...{idActual, setIdActual, fnRead}}/> 
    </div>

  );
}

export default App;
