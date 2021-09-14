import React from 'react';

import {
  Logo,
  LogOutButton,
  CancelButton,
  LogoutContainer,
  LogoutText,
} from '../LogoutModal/LogoutModal.style';

function LogoutModal() {
  return (
    <LogoutContainer>
      <Logo src={'/images/logo.svg'} alt="" />
      <LogoutText>Log out of Twitter?</LogoutText>
      <LogOutButton>Log out</LogOutButton>
      <CancelButton>Cancel</CancelButton>
    </LogoutContainer>
  );
}
export default LogoutModal;
