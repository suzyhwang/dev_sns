import styled from "styled-components";

export const ExploreContainer = styled.div`
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
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 30px;
  letter-spacing: -0.02em;
  border-bottom: 1px solid #f0f3f4;
  color: #000000;
  background: #ffffff;
  div {
    margin: 39px 0px 16px 26px;
  }
`;

export const MiddleContainer = styled.div`
  font-family: "Roboto";
  width: 790px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputBox = styled.div`
  font-family: "Roboto";
  margin-top: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 730px;
  height: 41px;
  background: #f0f3f4;
  border-radius: 50px;
  padding-left: 5px;
  border: 1px solid #f0f3f4;

  input {
    font-family: "Roboto";
    margin: 0 15px;
    width: 652px;
    height: 27px;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    letter-spacing: -0.015em;
    color: #6f767c;
    outline: none;
    border: none;
    background-color: transparent;
  }
`;

export const ClickedInputBox = styled.div`
  font-family: "Roboto";
  margin-top: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 730px;
  height: 41px;
  background: #ffffff;
  border-radius: 50px;
  padding-left: 5px;
  border: 1px solid #4aa1eb;
  input {
    font-family: "Roboto";
    margin: 0 15px;
    width: 630px;
    height: 27px;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    letter-spacing: -0.015em;
    color: #6f767c;
    outline: none;
    border: none;
    background-color: transparent;
  }

  img {
    cursor: pointer;
  }
`;

export const CommentContainer = styled.div`
  text-align: center;
  width: 790px;
  height: 720px;
  padding-top: 53px;

  .title {
    font-family: "Roboto";
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.05em;
    color: #000000;
    font-weight: 500;
  }

  .explanation {
    font-family: "Roboto";
    font-weight: 300;
    font-size: 22px;
    line-height: 28px;
    color: #6f767c;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 116px;
  border-bottom: 1px solid #f0f3f4;
`;

export const TapContainer = styled.div`
  box-sizing: border-box;
  padding-top: 15px;
  display: flex;
  justify-content: center;
  width: 790px;
  height: 50px;
  background: #ffffff;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 44px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.015em;
    color: #6f767c;
    cursor: pointer;
    &:hover {
      transition-duration: 0.3s;
      transition-property: background-color, box-shadow;
      background: #f0f3f4;
    }

    .clicked-tap {
      position: absolute;
      margin-top: 40px;
      width: 92px;
      height: 5px;
      background: #4aa1eb;
      border-radius: 50px;
    }
  }
`;

export const PostsTap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 790px;
`;

export const PeopleTap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 790px;
  padding-top: 20px;
`;
