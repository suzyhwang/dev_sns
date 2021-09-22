import styled from 'styled-components';

export const CommentContainer = styled.div`
  display: flex;
  width: 792px;
  height: 100%;
  border: 1px solid #f0f3f4;
  box-sizing: border-box;
  padding: 17px 36px 17px 10px;
`;

export const CommentArrow = styled.div`
  padding-top: 6px;
  img {
    width: 25px;
  }
`;

export const CommentUserImg = styled.div`
  width: 50px;
  text-align: center;
  padding: 0 14px 0 0;
  img {
    width: 40px;
  }
`;

export const CommentBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentBodyTop = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 15px;
  margin-top: 7px;
`;

export const CommentUserNameDateContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const CommentUserName = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`;

export const CommentDate = styled.div`
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

export const CommentContent = styled.div`
  flex: 1;
  word-break: break-all;
  margin-bottom: 13px;
  color: #6f767c;
`;
