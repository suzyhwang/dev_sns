import React, { useState } from 'react';
import { InputContainer, InputHolder, InputUserInfo } from './InputNickname.style';

function InputNickname({ nickname, inputHandler }) {
  // css 바꿔줄 boolean 값
  const [isFocus, setIsFocus] = useState(false);

  const focusHandler = () => {
    setIsFocus(!isFocus);
  };

  return (
    <InputContainer focus={isFocus} inputFull={nickname.length}>
      <InputHolder focus={isFocus} inputFull={nickname.length}>
        닉네임
      </InputHolder>
      <InputUserInfo
        name={'nickname'}
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

export default InputNickname;
