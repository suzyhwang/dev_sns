import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  width: 792px;
  height: 100%;
  border: 1px solid #f0f3f4;
  box-sizing: border-box;
  padding: 17px 36px 17px 10px;
`;

export const PostUserImg = styled.div`
  width: 86px;
  text-align: center;
  padding: 0 14px 0 14px;
  img {
    width: 47px;
  }
`;

export const PostBody = styled.div`
  display: flex;
  width: 670px;
  flex-direction: column;
`;

export const PostBodyTop = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 15px;
  margin-top: 7px;
`;

export const PostUserNameDateContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const PostUserName = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
`;

export const PostDate = styled.div`
  color: #566370;
  font-size: 1rem;
  margin-left: 11px;
`;

export const EditDelBtnContainer = styled.div`
  width: 140px;
  text-align: right;
  img {
    margin-left: 13px;
    cursor: pointer;
  }
`;

export const PostContent = styled.div`
  flex: 1;
  width: 670px;
  word-break: break-all;
  margin-bottom: 13px;
  color: #6f767c;
`;

export const PostBodyBottom = styled.div`
  flex: 1;
  width: 670px;
  height: 18px;
  display: flex;
  align-items: center;

  div {
    width: 13px;
    font-size: 1rem;
    color: #d1d9dd;
    margin-top: 4px;
    margin-right: 17px;
  }
`;

export const CommentsBtn = styled.svg`
  margin-right: 5px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  path {
    transition: all 0.5s;
  }
`;

export const LikesBtn = styled.svg`
  margin-right: 5px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  path {
    transition: all 0.5s;
  }
`;
