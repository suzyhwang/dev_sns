import styled from "styled-components";

export const HomeContainer = styled.div`
  box-sizing: border-box;
  width: 792px;
  height: 100vh;
  border-right: 1px solid #f0f3f4;
  border-left: 1px solid #f0f3f4;
  background: #ffffff;
  z-index: 1;
`;

export const TopContainer = styled.div`
  height: 39px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 30px;
  letter-spacing: -0.02em;

  color: #000000;

  background: #ffffff;
  div {
    margin: 39px 0px 16px 26px;
  }
`;

export const HomePost = styled.div`
  display: flex;
  border-top: 1px solid #f0f3f4;

  height: 200px;
  left: 726px;
  top: 85px;
`;

export const UserPhoto = styled.img`
  align-items: stretch;
  left: 10px;
  right: 10px;
  width: 47px;
  height: 47px;
  padding: 13px 13px 0px 26px;
`;

export const HomePostContainer = styled.div`
  height: 160px;
  left: 812px;
  top: 108px;

  textarea {
    font-family: "Roboto";
    max-height: 720px;
    color: #54636f;
    width: 660px;
    height: 140px;
    margin-top: 23px;
    border: none;
    outline: none;
    resize: none;

    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.015em;
    ::placeholder {
      font-family: "Roboto";
      font-size: 20px;
      color: #54636f;
    }
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #f0f3f4;
`;
export const HomePostButton = styled.button`
  position: absolute;
  margin-right: 15px;
  width: 77px;
  height: 40px;
  top: 220px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.03em;
  border: none;
  color: #ffffff;

  background: #a4cdf4;
  box-shadow: 0px 0px 17px -2px rgba(0, 0, 0, 0.2);
  border-radius: 42px;
  ${(props) =>
    props.disabled
      ? `
          background: #a4cdf4;
        `
      : `
          background: #55a3ef;
        `};
`;

export const BottomContainer = styled.div`
  border-top: 1px solid #f0f3f4;
  text-align: center;
  div {
    margin-top: 61px;
    margin-bottom: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.05em;

    color: #000000;
  }
  span {
    font-family: Roboto;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #6f767c;
  }
`;

export const LineBetween = styled.div`
  height: 11px;
  background: #f9fafb;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;
