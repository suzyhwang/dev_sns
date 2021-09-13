import React, { useEffect, useState } from "react";
import logo_img from "../../logo.svg";
import InputLogin from "../../components/InputLogin/InputLogin";
import InputPwd from "../../components/InputPwd/InputPwd";
import { dummy } from "../../dummy/dummy";
import {
  TwitterLoginText,
  LogoContainer,
  Container,
  Logo,
  LoginWarning,
  LoginButton,
  Register,
  ForgotPwd,
  LoginButtonContainer,
  BottomContainer,
} from "../LoginForm/LoginForm.style";

function LoginForm() {
  const [Isdisabled, setIsDisabled] = useState(true);
  const [inputId, setInputId] = useState("");
  const [isValid, setisValid] = useState(null);
  const handleInputId = (e) => {
    setInputId(e.target.value);
    // console.log("id", e.target.value);
  };

  const [inputPw, setInputPw] = useState("");

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
    // console.log("pw", e.target.value);
    if (inputId.length > 0 && inputPw.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("click login");
    console.log("ID", inputId);
    console.log("PW", inputPw);
    const dummyFilter = dummy.filter(
      (data) =>
        data.email === inputId.toString() &&
        data.password.toString() === inputPw.toString()
    );

    if (dummyFilter.length > 0) {
      setisValid(false);
    } else {
      setisValid(true);
    }
  };

  return (
    <Container>
      <LogoContainer>
        <Logo src={logo_img} />
      </LogoContainer>
      <TwitterLoginText>pippy 로그인</TwitterLoginText>
      {!isValid ? (
        ""
      ) : (
        <LoginWarning>
          <div>
            이메일과 비밀번호를 확인하신 후 <br></br>
            다시 로그인 해 주세요.
          </div>
        </LoginWarning>
      )}

      <form>
        <InputLogin inputId={inputId} handleInputId={handleInputId} />
        <InputPwd inputPw={inputPw} handleInputPw={handleInputPw} />
        <LoginButtonContainer>
          <LoginButton disabled={Isdisabled} onClick={handleLogin}>
            로그인
          </LoginButton>
        </LoginButtonContainer>
      </form>
      <BottomContainer>
        <ForgotPwd>비밀번호를 잊으셨나요?</ForgotPwd>
        <Register>
          <b>pippy</b> 가입
        </Register>
      </BottomContainer>
    </Container>
  );
}
export default LoginForm;
