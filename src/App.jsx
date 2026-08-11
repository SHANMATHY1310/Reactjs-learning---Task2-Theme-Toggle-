import { useState } from "react";
import "./App.css";

function App() {
  const[darkmode , setDarkmode] = useState(false);
  return (
    <div className = {darkmode ? "app dark" : "app light"}>
      <h1>Theme Toggle</h1>
      <button onClick = {()=> setDarkmode(!darkmode)}>Toggle</button>

    </div>

  )
}

export default App;