import React from "react";

import {
  Logo,
  LogOutButton,
  CancelButton,
  LogoutContainer,
  LogoutText,
} from "../LogoutModal/LogoutModal.style";

import logo_img from "../../logo.svg";

function LogoutModal() {
  return (
    <LogoutContainer>
      <Logo src={logo_img} />
      <LogoutText>Log out of Twitter?</LogoutText>
      <LogOutButton>Log out</LogOutButton>
      <CancelButton>Cancel</CancelButton>
    </LogoutContainer>
  );
}
export default LogoutModal;
