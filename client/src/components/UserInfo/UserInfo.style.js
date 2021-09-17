import styled from 'styled-components';

export const UserInfoContainer = styled.div`
  display: inline-flex;
  width : 792px:
  height: 70px;
  box-sizing: border-box;
  align-items : center;
`;

export const UserInfoProfile = styled.div`
  width: 80px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 47px;
    height: 47px;
  }
`;

export const UserInfoBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 570px;
  height: 70px;
`;

export const UserInfoName = styled.div`
  flex: 1;
  display: table-cell;
  width: 570px;
  display: flex;
  align-items: end;
  font-size: 1rem;
  margin-bottom: 1px;
  font-weight: bold;
`;
export const UserInfoEmail = styled.div`
  flex: 1;
  display: table-cell;
  width: 570px;
  display: flex;
  align-items: start;
  margin-top: 1px;
  color: #6f767c;
  font-size: 1rem;
  font-weight: 500;
`;

export const FollowBtn = styled.button`
  width: 100px;
  height: 32px;
  border: 1px solid #101419;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 50px;
  background: #101419;
  color: #ffffff;
`;
