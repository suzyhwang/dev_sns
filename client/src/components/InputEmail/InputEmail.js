import React, { useState } from 'react';
import { InputContainer, InputHolder, InputUserInfo } from './InputEmail.style';

function InputEmail({ email, inputHandler }) {
  // css 바꿔줄 boolean 값
  const [isFocus, setIsFocus] = useState(false);

  const focusHandler = () => {
    setIsFocus(!isFocus);
  };

  return (
    <InputContainer focus={isFocus} inputFull={email.length}>
      <InputHolder focus={isFocus} inputFull={email.length}>
        이메일
      </InputHolder>
      <InputUserInfo
        name={'email'}
        onKeyUp={(e) => {
          inputHandler(e);
        }}
        onFocus={() => {
          focusHandler();
        }}
        onBlur={() => {
          focusHandler();
        }}
      />
    </InputContainer>
  );
}

export default InputEmail;
