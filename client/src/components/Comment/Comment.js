import React, { useState } from 'react';
import { loginUser } from '../../dummy/dummy';
import {
  CommentContainer,
  CommentArrow,
  CommentUserImg,
  CommentBody,
  CommentBodyTop,
  CommentUserNameDateContainer,
  CommentUserName,
  CommentDate,
  EditDelBtnContainer,
  CommentContent,
} from './Comment.style';

function Comment({ comment }) {
  console.log(comment);
  return (
    <CommentContainer>
      <CommentArrow>
        <img src={'/images/commentArrow.svg'} alt="" />
      </CommentArrow>
      <CommentUserImg>
        <img src={'/images/profile.svg'} alt="" />
      </CommentUserImg>
      <CommentBody>
        <CommentBodyTop>
          <CommentUserNameDateContainer>
            <CommentUserName>{comment.nickname}</CommentUserName>
            <CommentDate>{comment.created_at.slice(0, 10)}</CommentDate>
          </CommentUserNameDateContainer>
          {comment.nickname === loginUser[0].nickname ? (
            <EditDelBtnContainer>
              <img src={'/images/editBtn.svg'} alt="" />
              <img src={'/images/deleteBtn.svg'} alt="" />
            </EditDelBtnContainer>
          ) : null}
        </CommentBodyTop>
        <CommentContent>{comment.comment}</CommentContent>
      </CommentBody>
    </CommentContainer>
  );
}

export default Comment;
