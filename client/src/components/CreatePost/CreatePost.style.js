import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  font-family: "Roboto";
`;

export const ModalView = styled.div`
  margin-top: 100px;
  width: 600px;
  height: 330px;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

export const TopContainer = styled.div`
  box-sizing: border-box;
  width: 600px;
  height: 55px;
  padding: 15px;
`;

export const MiddleContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 15px;
  height: 210px;
  border-top: 1px solid #ecf1f2;
  border-bottom: 1px solid #ecf1f2;
`;

export const ImgContainer = styled.div`
  width: 50px;
  height: 50px;
`;

export const TextContainer = styled.div`
  textarea {
    font-family: "Roboto";
    font-size: 20px;
    color: #54636f;
    width: 500px;
    height: 160px;
    margin: 10px 10px;
    border: none;
    outline: none;
    resize: none;
    ::placeholder {
      font-family: "Roboto";
      font-size: 20px;
      color: #54636f;
    }
  }
`;

export const ButtonContainer = styled.div`
  padding: 12px 0 10px 495px;
  div {
    box-sizing: border-box;
    padding: 9px 0;
    text-align: center;
    color: #fff;
    font-size: 17px;
    font-weight: 560;
    width: 76px;
    height: 39px;
    background: #a4cdf4;
    border-radius: 50px;
    letter-spacing: -0.03em;
  }
  button {
    box-sizing: border-box;
    padding: 9px 0;
    text-align: center;
    width: 76px;
    height: 39px;
    color: #fff;
    font-size: 17px;
    font-weight: 570;
    background: #4aa1eb;
    border-radius: 50px;
    outline: none;
    border: none;
    letter-spacing: -0.03em;
    :active {
      background: #a4cdf4;
    }
  }
`;
