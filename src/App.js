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
import Form from './components/Form'
import PostList from './components/PostList'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from './components/HookCounterOne'
function App() {
  return (
    <div className="App">
      <HookCounterOne />
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
      {/* <PostList /> */}
      {/* <Form /> */}
      {/* <NameList /> */}
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
