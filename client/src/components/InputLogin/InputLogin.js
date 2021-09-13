import React, { useState } from "react";
import {
  Input_Container,
  InputHolder,
  Input_UserInfo,
} from "../InputLogin/InputLogin.style";

function InputBlock({ inputId, handleInputId }) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Input_Container focus={isFocus} inputId={inputId.length}>
      <InputHolder focus={isFocus} inputId={inputId.length}>
        이메일
      </InputHolder>
      <Input_UserInfo
        type="text"
        onFocus={() => {
          setIsFocus(!isFocus);
        }}
        onBlur={() => {
          setIsFocus(!isFocus);
        }}
        onChange={(e) => {
          handleInputId(e);
        }}
      />
    </Input_Container>
  );
}

export default InputBlock;
