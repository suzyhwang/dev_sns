import styled from "styled-components";

export const FollowPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 792px;
  height: 100vh;
  box-sizing: border-box;
  border-top: 1px solid #f0f3f4;
  border-left: 1px solid #f0f3f4;
  border-right: 1px solid #f0f3f4;
  margin-left: 324px;
`;

export const FollowPageTop = styled.div`
  height: 85px;
  div {
    font-weight: bold;
    font-size: 1.6rem;
    padding: 39px 0px 16px 24px;
  }
`;

export const FollowPageTapContainer = styled.div`
  display: flex;
  height: 62px;
  font-size: 1.1rem;
  color: #6f767c;
  font-weight: 500;
  font-family: "Roboto";
  border-bottom: 1px solid #f0f3f4;
`;

export const FollowersTab = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  div {
    margin-top: 14px;
    width: 92px;
    height: 5px;
    background: ${(props) => (props.pickFollowersTap ? "#4aa1eb" : "none")};
    border-radius: 50px;
    transition: all 0.3s;
  }
  &:hover {
    transition-duration: 0.3s;
    transition-property: background-color, box-shadow;
    background: #f0f3f4;
  }
`;

export const FollowingTab = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  color: #6f767c;
  &:hover {
    transition-duration: 0.3s;
    transition-property: background-color, box-shadow;
    background: #f0f3f4;
  }
  div {
    margin-top: 14px;
    width: 92px;
    height: 5px;
    background: ${(props) => (props.pickFollowersTap ? "none" : "#4aa1eb")};
    border-radius: 50px;
    transition: all 0.3s;
  }
`;
