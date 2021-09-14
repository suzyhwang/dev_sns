import React from 'react';
import {
  FindPasswordContainer,
  Logo,
  InfoText,
  ShowFindPassword,
  GoLogin,
} from './SuccessFindForm.style';

function SuccessFindForm({ openCloseModalHandler, userInfo }) {
  return (
    <FindPasswordContainer>
      <Logo>
        <img src="/images/logo.svg" alt="logo"></img>
      </Logo>
      <InfoText>회원님의 비밀번호 입니다</InfoText>
      <ShowFindPassword>{userInfo[0].password}</ShowFindPassword>
      <GoLogin onClick={openCloseModalHandler}>로그인 하기</GoLogin>
    </FindPasswordContainer>
  );
}

export default SuccessFindForm;
