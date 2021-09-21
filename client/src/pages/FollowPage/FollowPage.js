import React, { useState } from 'react';
import UserInfo from '../../components/UserInfo/UserInfo';
import {
  FollowPageContainer,
  FollowPageTop,
  FollowPageTapContainer,
  FollowersTab,
  FollowingTab,
} from './FollowPage.style';

function FollowPage() {
  const [isFollowersTap, setIsPostsTap] = useState(true);

  return (
    <FollowPageContainer>
      <FollowPageTop>
        <div>GiCheol</div>
      </FollowPageTop>
      <FollowPageTapContainer>
        <FollowersTab pickFollowersTap={isFollowersTap} onClick={() => setIsPostsTap(true)}>
          Followers
          <div></div>
        </FollowersTab>
        <FollowingTab pickFollowersTap={isFollowersTap} onClick={() => setIsPostsTap(false)}>
          Following
          <div></div>
        </FollowingTab>
      </FollowPageTapContainer>
      {isFollowersTap ? (
        <UserInfo></UserInfo>
      ) : (
        <>
          <UserInfo></UserInfo>
          <UserInfo></UserInfo>
        </>
      )}
    </FollowPageContainer>
  );
}

export default FollowPage;
