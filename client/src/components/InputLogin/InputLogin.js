import React, { useState } from 'react';
import { InputContainer, InputHolder, InputUserInfo } from '../InputLogin/InputLogin.style';

function InputBlock({ inputId, handleInputId }) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <InputContainer focus={isFocus} inputId={inputId.length}>
      <InputHolder focus={isFocus} inputId={inputId.length}>
        이메일
      </InputHolder>
      <InputUserInfo
        type="text"
        onFocus={() => {
          setIsFocus(!isFocus);
        }}
        onBlur={() => {
          setIsFocus(!isFocus);
        }}
        onKeyUp={(e) => {
          handleInputId(e);
        }}
      />
    </InputContainer>
  );
}

export default InputBlock;
