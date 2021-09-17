import React from 'react';
import {
  UserInfoContainer,
  UserInfoProfile,
  UserInfoBody,
  UserInfoName,
  UserInfoEmail,
  FollowBtn,
} from './UserInfo.style';

function UserInfo() {
  return (
    <div>
      <UserInfoContainer>
        <UserInfoProfile>
          <img src={'/images/profile.svg'}></img>
        </UserInfoProfile>
        <UserInfoBody>
          <UserInfoName>
            <span>catttttt</span>
          </UserInfoName>
          <UserInfoEmail>
            <span>min85472@gmail.com</span>
          </UserInfoEmail>
        </UserInfoBody>
        <FollowBtn>follow</FollowBtn>
      </UserInfoContainer>
    </div>
  );
}

export default UserInfo;
