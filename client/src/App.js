import React, { useState } from "react";
import Home from "./pages/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import LoginForm from "./pages/LoginForm/LoginForm";
import { Maincontainer } from "./App.style";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [issueAccessToken, setIssueAccessToken] = useState("");

  const loginHandler = (data) => {
    setIsLogin(true);
    setIssueAccessToken(data.accessToken);
  };

  return (
    <Maincontainer>
      {isLogin ? <SideBar /> : null}
      {isLogin ? <Home /> : <LoginForm loginHandler={loginHandler} />}
    </Maincontainer>
  );
}

export default App;
