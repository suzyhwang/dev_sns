import React, { useState } from "react";
import {
  Input_Container,
  InputHolder,
  Input_UserInfo,
} from "../InputPwd/InputPwd.style";

function InputBlock({ inputPw, handleInputPw }) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Input_Container focus={isFocus} inputPw={inputPw.length}>
      <InputHolder focus={isFocus} inputPw={inputPw.length}>
        비밀번호
      </InputHolder>
      <Input_UserInfo
        type="password"
        onFocus={() => {
          setIsFocus(!isFocus);
        }}
        onBlur={() => {
          setIsFocus(!isFocus);
        }}
        onChange={(e) => {
          handleInputPw(e);
        }}
      />
    </Input_Container>
  );
}

export default InputBlock;
