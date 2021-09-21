import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-size;
  width: 792px;
  height: 100%;
  font-family: 'Roboto';
`;

export const ProfileInfoArea = styled.div`
  position: sticky;
  border-left: 1px solid #f0f3f4;
  border-right: 1px solid #f0f3f4;
  border-bottom: 1px solid #f0f3f4;
`;

export const ProfileTop = styled.div`
  height: 85px;
  div {
    font-weight: bold;
    font-size: 26px;
    padding: 39px 0px 16px 24px;
  }
`;

export const ProfileBackground = styled.div`
  height: 147px;
  background: #f9fafb;
  border-top: 1px solid #f0f3f4;
  border-bottom: 1px solid #f0f3f4;
`;

export const ProfileInfo = styled.div`
  height: 169px;
  display: flex;
  flex-direction: column;
`;

export const ProfileNameEamil = styled.div`
  height: 50px;
`;

export const ProfileName = styled.div`
  font-weight: bold;
  font-size: 26px;
  padding-left: 39px;
  margin-bottom: 3px;
`;

export const ProfileEmail = styled.div`
  font-weight: 200;
  font-size: 16px;
  padding-left: 39px;
  color: #6f767c;
`;

export const FollowLinkContainer = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 16px;
  color: #6f767c;
  padding-left: 39px;
  margin-top: 31px;
  margin-bottom: 17px;
`;

export const FollowingLink = styled.a`
  margin-right: 15px;
  &:hover {
    cursor: pointer;
    text-decoration-line: underline;
    text-underline-position: under;
  }
`;

export const FollowerLink = styled.a`
  margin-right: 15px;
  &:hover {
    cursor: pointer;
    text-decoration-line: underline;
    text-underline-position: under;
  }
`;

export const ProfilePhoto = styled.img`
  position: relative;
  bottom: 41px;
  width: 82px;
  margin-left: 31px;
`;

export const PostsLikesTabContainer = styled.div`
  display: flex;
  height: 70px;
  font-size: 18px;
  color: #6f767c;
  font-weight: 500;
`;

export const PostsTab = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  div {
    margin-top: 10px;
    width: 92px;
    height: 8px;
    background: ${(props) => (props.pickPostsTap ? '#4aa1eb' : 'none')};
    border-radius: 50px;
    transition: all 0.3s;
  }
  &:hover {
    transition-duration: 0.3s;
    transition-property: background-color, box-shadow;
    background: #f0f3f4;
  }
`;

export const LikesTab = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  div {
    margin-top: 10px;
    width: 92px;
    height: 8px;
    background: ${(props) => (props.pickPostsTap ? '#none' : '#4aa1eb')};
    border-radius: 50px;
    transition: all 0.3s;
  }
  &:hover {
    transition-duration: 0.3s;
    transition-property: background-color, box-shadow;
    background: #f0f3f4;
  }
`;

export const PostsArea = styled.div``;
