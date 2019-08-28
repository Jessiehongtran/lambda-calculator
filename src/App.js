import React from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers"
import Operators from "./components/ButtonComponents/OperatorButtons/Operators"
import Specials from "./components/ButtonComponents/SpecialButtons/Specials"
import Display from "./components/DisplayComponents/Display"
import Logo from "./components/DisplayComponents/Logo";

function App() {
  
  return (
    <div className="container">
      <Logo />
      <div className="App"> 
        <Numbers  />
        <Operators />
        <Specials />
        {/* <Display /> */}
      </div>
    </div>
  );
}

export default App;
