import styled, { keyframes } from "styled-components";

export const LandingPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Logo = styled.img`
  margin-top: 152px;
  margin-left: 120px;
  width: 191px;
  height: 167px;
`;

export const WelcomeText = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  letter-spacing: 0.025em;
  color: #000000;
  span {
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    letter-spacing: 0.025em;

    color: #55a3ef;
  }
`;

export const LoginButton = styled.button`
  width: 253px;
  height: 73px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height */
  cursor: pointer;
  text-align: center;
  letter-spacing: 0.025em;

  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 30px;
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.2));
  :hover {
    color: #55a3ef;
    font-weight: 500;
  }
`;

export const SignupButton = styled.button`
  width: 253px;
  height: 73px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height */
  margin-left: 73px;
  text-align: center;
  letter-spacing: 0.025em;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 30px;
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.2));
  :hover {
    color: #55a3ef;
    font-weight: 500;
  }
`;

export const LogoContainer = styled.div`
  width: 279px;
  height: 980px;
  margin-left: -20%;
  box-sizing: border-box;
`;
export const MiddleContainer = styled.div`
  width: 672px;
  height: 680px;

  box-sizing: border-box;
`;
export const TwoButtonContainer = styled.div`
  width: 672px;

  text-align: center;

  box-sizing: border-box;
`;
export const WelcomeTextContainer = styled.div`
  width: 672px;
  margin-bottom: 50px;
  margin-top: 223px;

  box-sizing: border-box;
  text-align: center;
`;
export const WelcomeTextSecond = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  letter-spacing: 0.025em;

  color: #000000;

  span {
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    letter-spacing: 0.025em;

    color: #55a3ef;
  }
`;

export const slideUp = keyframes`
from{
    transform: translateY(15px);

}
to{
    transform: translate(0px)
}
`;

export const BottomContainer = styled.div`
  text-align: center;
  box-sizing: border-box;
`;

export const DownArrow = styled.img`
  width: 215px;
  height: 215px;

  animation: ${slideUp} 1.5s infinite ease-in;
`;

export const BetweenContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
