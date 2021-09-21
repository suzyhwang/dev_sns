import styled from 'styled-components';

export const ThreadContainer = styled.div`
  box-sizing: border-box;
  position: relative;
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

  div {
    margin-top: 46.25px;
  }
  span {
    margin: 39px 0px 16px 26px;
  }
`;

export const BackArrow = styled.img`
  margin-left: 31px;
  width: 20px;
  height: 17.5px;
`;

export const CommentContainer = styled.div`
  width: 791px;
`;
