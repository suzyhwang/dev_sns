import React from "react";

import {
  Logo,
  LogOutButton,
  CancelButton,
  LogoutContainer,
  LogoutText,
} from "../LogoutModal/LogoutModal.style";

function LogoutModal({ openCloseModalHandler }) {
  return (
    <LogoutContainer onClick={(e) => e.stopPropagation()}>
      <Logo src={"/images/logo.svg"} alt="" />
      <LogoutText>Log out of pippy?</LogoutText>
      <LogOutButton>Log out</LogOutButton>
      <CancelButton onClick={openCloseModalHandler}>Cancel</CancelButton>
    </LogoutContainer>
  );
}
export default LogoutModal;
