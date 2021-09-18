import React, { useState } from "react";
import Home from "./pages/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import { Maincontainer } from "./App.style";
function App() {
  return (
    <Maincontainer>
      <SideBar />
      <Home />
    </Maincontainer>
  );
}

export default App;
