import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import LoginForm from "./pages/LoginForm/LoginForm";
import { Maincontainer } from "./App.style";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState(null);
  const [inputPw, setInputPw] = useState("");
  const [inputId, setInputId] = useState("");
  const [loginUserInfo, setLoginUserInfo] = useState("");

  const handleLoginButton = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: "http://localhost:4000/user/login",
      data: {
        email: inputId,
        password: inputPw,
      },
    })
      .then((res) => {
        setIsLogin(true);
        setToken(res.data.data.accessToken);
      })
      .catch((err) => {
        console.log(err);
        setIsValid(true);
      });
  };

  useEffect(async () => {
    await axios({
      method: "get",
      url: "http://localhost:4000/user/userinfo",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }).then((res) => {
      console.log("ddd", res.data.data);
      const { id, nickname, email } = res.data.data;
      setLoginUserInfo({ id, nickname, email });
      setIsLoading(false);
    });
  }, [token]);

  return (
    <Maincontainer>
      {isLoading ? null : isLogin ? (
        <SideBar loginUserInfo={loginUserInfo} />
      ) : null}
      {isLoading ? (
        <LoginForm
          isValid={isValid}
          setIsValid={setIsValid}
          handleLoginButton={handleLoginButton}
          inputId={inputId}
          setInputId={setInputId}
          inputPw={inputPw}
          setInputPw={setInputPw}
        />
      ) : isLogin ? (
        <Home loginUserInfo={loginUserInfo} />
      ) : (
        <LoginForm
          isValid={isValid}
          setIsValid={setIsValid}
          handleLoginButton={handleLoginButton}
          inputId={inputId}
          setInputId={setInputId}
          inputPw={inputPw}
          setInputPw={setInputPw}
        />
      )}
    </Maincontainer>
  );
}
export default App;
