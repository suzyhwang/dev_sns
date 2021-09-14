import React from 'react';
import styled from 'styled-components';
import home_img from '../home.svg';
import explore_img from '../explore.svg';
import profile_img from '../profile.svg';
import userphoto_img from '../userphoto.svg';

const Logo = styled.img`
  margin-top: 39px;
  margin-bottom: 32.5px;
  width: 42.6px;
  height: 35px;
  left: 439px;
  top: 39px;
`;

const SideBarContainer = styled.div`
  position: absolute;
  width: 324px;
  height: 1080px;
  left: 402px;
  top: 0px;
  padding-left: 37px;
  background: #ffffff;
`;

const SideBarHome = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  width: 324px;
  height: 64px;
  left: 402px;
  top: 90px;
  border: 1px solid black;
  span {
    display: inline-block;
    margin-top: 0 auto;
    color: #55a3ef;
    border: 1px solid black;
    height: 25px;
    background-color: red;
  }
`;

const SideBarHomeIcon = styled.img`
  width: 25px;
  height: 25px;
  left: 442.5px;
  top: 106.5px;
  margin-right: 25.5px;
  border: 1px solid black;
`;

const SideBarExploreIcon = styled.img`
  width: 22.5px;
  height: 22.5px;
  left: 443.75px;
  top: 174.75px;
  margin-right: 26.75px;
`;

const SideBarProfileIcon = styled.img`
  left: 23.11%;
  right: 75.72%;
  top: 22.29%;
  bottom: 75.62%;
  margin-right: 26.75px;
`;

const SideBarExplore = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  width: 324px;
  height: 64px;
  left: 402px;
  top: 154px;

  color: #000000;
`;

const SideBarProfile = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;

  color: #000000;
  width: 324px;
  height: 64px;
  left: 402px;
  top: 218px;
`;

const SideBarTweetButton = styled.button`
  width: 259px;
  height: 55px;
  left: 426px;
  top: 305px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.03em;
  border: none;
  color: #ffffff;
  margin-left: -20px;
  background: #55a3ef;
  box-shadow: 0px 0px 17px -2px rgba(0, 0, 0, 0.2);
  border-radius: 42px;
`;

const SideBarUserContainer = styled.div`
  width: 324px;
  height: 84px;
  left: 402px;
  top: 988px;
`;

const SideBarUserPhoto = styled.img`
  width: 47px;
  height: 47px;
  left: 439px;
  top: 1006px;
`;

const SideBarUserId = styled.span`
  width: 53px;
  height: 19px;
  left: 498px;
  top: 1008px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  letter-spacing: -0.02em;

  color: #000000;
`;

const SideBarUserEmail = styled.span`
  width: 163px;
  height: 19px;
  left: 499px;
  top: 1030px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #6f767c;
`;

function SideBar() {
  return (
    <SideBarContainer>
      <Logo src={'/images/logo.svg'} alt="" />
      <SideBarHome>
        <SideBarHomeIcon src={home_img} alt="" />
        <span>Home</span>
      </SideBarHome>
      <SideBarExplore>
        <SideBarExploreIcon src={explore_img} alt="" />
        <span>Explore</span>
      </SideBarExplore>
      <SideBarProfile>
        <SideBarProfileIcon src={profile_img} alt="" />
        <span>Profile</span>
      </SideBarProfile>
      <SideBarTweetButton>Post</SideBarTweetButton>
      <SideBarUserContainer>
        <SideBarUserPhoto src={userphoto_img} alt="" />
        <SideBarUserId>Sample</SideBarUserId>
        <SideBarUserEmail>min85472@gmail.com</SideBarUserEmail>
      </SideBarUserContainer>
    </SideBarContainer>
  );
}

export default SideBar;
