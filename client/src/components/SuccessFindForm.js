import React from "react";
import styled from "styled-components";

const FindPasswordContainer = styled.div`
  padding :  10px 30px 20px 30px;
  font-family : Roboto;
`;

export const Logo = styled.div`
  text-align : center;
  padding : 0 0 10px 0;
  margin-bottom : 30px;
  img{
    width : 35px;
  }
`;

export const InfoText = styled.div`
  font-weight : bold;
  font-size : 1.5rem;
  margin-bottom : 30px;
`;

export const ShowFindPassword = styled.div`
  width: 550px;
  height: 60px;
  border: 1px solid #D1D9DD;
  box-sizing: border-box;
  border-radius: 4px;
  display : table-cell; 
  padding-left : 15px;
  font-size : 1.1rem;
  font-weight : bold;
  vertical-align : middle;
`;

export const GoLogin = styled.button`
  width: 546px;
  height: 45px;
  left: 687px;
  top: 367px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  margin-top : 80px;
  line-height: 23px;
  letter-spacing: -0.05em;
  border: none;
  color: #ffffff;
  background: #4aa1eb;
  box-shadow: 0px 0px 17px -2px rgba(0, 0, 0, 0.2);
  border-radius: 42px;
`;

function SuccessFindForm({ userInfo }) {
  return (
    <FindPasswordContainer>
      <Logo><img src="/images/logo.svg" alt="logo" ></img></Logo>
      <InfoText>회원님의 비밀번호 입니다</InfoText>
      <ShowFindPassword>
        {userInfo[0].password}
      </ShowFindPassword>
      <GoLogin>로그인 하기</GoLogin>
    </FindPasswordContainer>
  );
}

export default SuccessFindForm;