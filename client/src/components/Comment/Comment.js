import React, { useState } from 'react';

import {
  PostContainer,
  PostUserImg,
  PostBody,
  PostBodyTop,
  PostUserNameDateContainer,
  PostUserName,
  PostDate,
  EditDelBtnContainer,
  PostContent,
} from './Comment.style';

function Comment({ comment, loginUser }) {
  return (
    <PostContainer>
      <PostUserImg>
        <img src={'/images/profile.svg'} alt=""></img>
      </PostUserImg>
      <PostBody>
        <PostBodyTop>
          <PostUserNameDateContainer>
            <PostUserName>{comment.nickname}</PostUserName>
            <PostDate>{comment.created_at.slice(0, 10)}</PostDate>
          </PostUserNameDateContainer>
          {comment.nickname === loginUser[0].nickname ? (
            <EditDelBtnContainer>
              <img src={'/images/editBtn.svg'} alt="" />
              <img src={'/images/deleteBtn.svg'} alt="" />
            </EditDelBtnContainer>
          ) : null}
        </PostBodyTop>
        <PostContent>{comment.comment}</PostContent>
      </PostBody>
    </PostContainer>
  );
}

export default Comment;
