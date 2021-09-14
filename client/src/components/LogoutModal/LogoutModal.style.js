import styled from 'styled-components';

export const Logo = styled.img`
  width: 51px;
  height: 41.91px;
  left: 998px;
  top: 392.32px;
  margin-top: 31.32px;
`;

export const LogOutButton = styled.button`
  width: 256px;
  height: 42px;
  left: 833px;
  top: 593px;

  background: #111418;
  box-shadow: 0px 0px 17px -2px rgba(0, 0, 0, 0.2);
  border-radius: 42px;
  color: white;
`;

export const CancelButton = styled.button`
  width: 256px;
  height: 42px;
  left: 833px;
  top: 655px;
  margin-top: 20px;
  margin-bottom: 30px;
  background: #ffffff;
  border: 1px solid #d8e0e3;
  border-radius: 42px;
`;

export const LogoutContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 323px;
  height: 358px;

  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  text-align: center;
`;

export const LogoutText = styled.p`
  width: 319px;
  height: 44px;

  margin-top: 53.78px;
  margin-bottom: 53px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  letter-spacing: 0.065em;

  color: #000000;
`;
