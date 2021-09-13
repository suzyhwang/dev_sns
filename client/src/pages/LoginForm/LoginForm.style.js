import styled from "styled-components";

export const TwitterLoginText = styled.h3`
  width: 175px;
  height: 38px;
  left: 768px;
  top: 154px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  margin-bottom: 29px;
  margin-top: 44px;

  color: #000000;
`;

export const LogoContainer = styled.div`
  width: 392px;
  height: 76px;
  left: 764px;
  top: 52px;
  margin-top: 69px;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 392px;
  height: 1080px;

  background: #ffffff;
`;

export const Logo = styled.img`
  margin-top: 30px;
`;

export const LoginWarning = styled.p`
  width: 383px;
  height: 72px;
  left: 768px;
  top: 204px;
  background: #f9dfe3;
  border-radius: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.06em;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  div {
    padding-top: 20px;
  }
`;

export const LoginButton = styled.button`
  width: 393px;
  height: 59px;
  left: 763px;
  top: 412px;

  box-shadow: 0px 0px 17px -2px rgba(0, 0, 0, 0.2);
  border-radius: 42px;
  color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */
  border: none;

  letter-spacing: -0.05em;

  ${(props) =>
    props.disabled
      ? `
          background: #a4cdf4;
        `
      : `
          background: #55a3ef;
        `};
`;

export const Register = styled.span`
  width: 77px;
  height: 19px;
  left: 1010px;
  top: 510px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  margin-left: 20px;
  color: #4aa1eb;
`;

export const ForgotPwd = styled.span`
  width: 161px;
  height: 19px;
  left: 833px;
  top: 510px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  letter-spacing: 0.015em;
  color: #4aa1eb;
`;

export const LoginButtonContainer = styled.div`
  width: 392px;
  height: 94px;
  left: 764px;
  top: 395px;
  margin-bottom: 9px;
`;

export const BottomContainer = styled.div`
  text-align: center;
`;
