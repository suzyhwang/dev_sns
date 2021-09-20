import React, { useState } from 'react';
import { dummy, posts, comments, loginUser, likes } from '../../dummy/dummy';
import Post from '../../components/Post/Post';
import {
  ProfileContainer,
  ProfileInfoArea,
  ProfileTop,
  ProfileBackground,
  ProfileInfo,
  ProfileNameEamil,
  ProfileName,
  ProfileEmail,
  FollowLinkContainer,
  FollowingLink,
  FollowerLink,
  ProfilePhoto,
  PostsLikesTabContainer,
  PostsTab,
  LikesTab,
  PostsArea,
} from './profile.style';

function Profile() {
  const myPost = posts.filter((post) => post.nickname === loginUser[0].nickname);
  const [isPostsTap, setIsPostsTap] = useState(true);
  const [showPosts, setShowPosts] = useState(myPost);

  const showUserPostsHandler = () => {
    setIsPostsTap(true);
  };

  const showUserLikesHandler = () => {
    setIsPostsTap(false);
  };

  return (
    <ProfileContainer>
      <ProfileInfoArea>
        <ProfileTop>
          <div>Profile</div>
        </ProfileTop>
        <ProfileBackground></ProfileBackground>
        <ProfilePhoto src={'/images/profile.svg'}></ProfilePhoto>
        <ProfileInfo>
          <ProfileNameEamil>
            <ProfileName>KKAKKA_</ProfileName>
            <ProfileEmail>min85472@gmail.com</ProfileEmail>
          </ProfileNameEamil>
          <FollowLinkContainer>
            <FollowingLink>{4} following</FollowingLink>
            <FollowerLink>{5} follower</FollowerLink>
          </FollowLinkContainer>
          <PostsLikesTabContainer>
            <PostsTab
              pickPostsTap={isPostsTap}
              onClick={() => {
                showUserPostsHandler();
              }}
            >
              Posts<div></div>
            </PostsTab>
            <LikesTab pickPostsTap={isPostsTap} onClick={() => showUserLikesHandler()}>
              Likes<div></div>
            </LikesTab>
          </PostsLikesTabContainer>
        </ProfileInfo>
      </ProfileInfoArea>
      <div>
        {isPostsTap ? showPosts.map((post) => <Post post={post} key={post.id}></Post>) : null}
      </div>
    </ProfileContainer>
  );
}

export default Profile;
