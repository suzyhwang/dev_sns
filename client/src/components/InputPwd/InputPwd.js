import React, { useState } from 'react';
import { InputContainer, InputHolder, InputUserInfo } from '../InputPwd/InputPwd.style';

function InputBlock({ inputPw, handleInputPw }) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <InputContainer focus={isFocus} inputPw={inputPw.length}>
      <InputHolder focus={isFocus} inputPw={inputPw.length}>
        비밀번호
      </InputHolder>
      <InputUserInfo
        type="password"
        onFocus={() => {
          setIsFocus(!isFocus);
        }}
        onBlur={() => {
          setIsFocus(!isFocus);
        }}
        onKeyUp={(e) => {
          handleInputPw(e);
        }}
      />
    </InputContainer>
  );
}

export default InputBlock;
