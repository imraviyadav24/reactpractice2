import React from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Counter from './components/Counter'
import FunctionClick from "./components/FunctionClick"
import ClassClick from "./components/ClassClick"
import EventBind from './components/EventBind'

import "./App.css";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList'
function App() {
  return (
    <div className="App">
      <NameList />
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <Counter /> */}
      {/* <Greet name="Bruce" />
      <Greet name="clark" />
      <Greet name="Diana" /> */}
      {/* <Welcome /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
    </div>
  );
}

export default App;
