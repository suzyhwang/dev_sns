import React, { useEffect, useState } from "react";
import {
  LandingPageContainer,
  Logo,
  WelcomeText,
  LoginButton,
  SignupButton,
  LogoContainer,
  MiddleContainer,
  TwoButtonContainer,
  WelcomeTextContainer,
  WelcomeTextSecond,
  BottomContainer,
  DownArrow,
  BetweenContainer,
} from "../01/LandingPage01.style";
function LandingPage01() {
  return (
    <LandingPageContainer>
      <LogoContainer>
        <Logo src={"/images/logo.svg"} />
      </LogoContainer>
      <BetweenContainer>
        <MiddleContainer>
          <WelcomeTextContainer>
            <WelcomeText>
              개발이 하고싶은<br></br>모두를 위한<br></br>특별한 공간,{" "}
              <span>pippy</span>
            </WelcomeText>
          </WelcomeTextContainer>
          <TwoButtonContainer>
            <LoginButton>로그인</LoginButton>
            <SignupButton>회원가입</SignupButton>
          </TwoButtonContainer>
        </MiddleContainer>
        <BottomContainer>
          <WelcomeTextSecond>
            <span>pippy</span>에 처음 오셨나요?<br></br>환영합니다!
          </WelcomeTextSecond>
          <DownArrow src={"/images/downarrow.svg"} />
        </BottomContainer>
      </BetweenContainer>
    </LandingPageContainer>
  );
}

export default LandingPage01;
