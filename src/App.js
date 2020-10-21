import React from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Counter from './components/Counter'
import FunctionClick from "./components/FunctionClick"
import ClassClick from "./components/ClassClick"

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Greet name="Bruce" />
      <Greet name="clark" />
      <Greet name="Diana" /> */}
      {/* <Welcome /> */}
      <FunctionClick />
      <ClassClick />
    </div>
  );
}

export default App;
