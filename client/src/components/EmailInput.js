import React, { useState } from 'react';
import styled from 'styled-components';

export const InputContainer = styled.div`
  display : flex;
  width: 550px;
  height: 60px;
  border-radius: 4px;
  font-family : Roboto;
  box-sizing: border‹-box;
  margin-bottom : 30px;
  flex-direction : ${props => props.focus || props.inputFull ? "column" : "low"};
  border : ${props => props.focus || props.inputFull ? "2px #1D9BF0" : "1px #D1D9DD"} solid;
  transition : ${props => props.focus || props.inputFull ? "all 0.2s" : "all 0.2s"};
  `;

export const InputHolder = styled.div`
  width : 60px;
  height : 58px;
  flex : 1;
  display : flex;
  padding-left : 5px;
  color : #6F767C;
  padding-top : ${props => props.focus || props.inputFull ? "5px" : "19px"};
  color: ${props => props.focus || props.inputFull ? "#4AA1EB" : "none"};
  font-size : ${props => props.focus || props.inputFull ? "0.8rem" : "1rem"};
  transition : ${props => props.focus || props.inputFull ? "all 0.3s" : "all 0.3s"};
`;

export const InputUserInfo = styled.input`
  border-radius: 4px;
  border : none;
  height : 50px;
  padding : 0;
  outline : none;
  flex : 9;
  font-size : 1.1rem;
  padding-left : 5px;
`;

function EmailInput({ emailValue, emailHandler}) {
  // css 바꿔줄 boolean 값
  const [isFocus, setIsFocus] = useState(false);

  const focusHandler = () => {
    setIsFocus(!isFocus);
  }

  return (
    <InputContainer focus={isFocus} inputFull={emailValue.length}>
      <InputHolder focus={isFocus} inputFull={emailValue.length}>이메일</InputHolder>
      <InputUserInfo onKeyUp={(e) => { emailHandler(e) }} onFocus={() => { focusHandler() }} onBlur={() => { focusHandler() }} />
    </InputContainer>
  );
}

export default EmailInput;