import React, { useState, useEffect } from "react";
import {
  Logo,
  SideBarContainer,
  SideBarHome,
  SideBarHomeIcon,
  SideBarExploreIcon,
  SideBarProfileIcon,
  SideBarExplore,
  SideBarProfile,
  SideBarTweetButton,
  SideBarUserContainer,
  SideBarUserId,
  SideBarUserEmail,
  SideBarUserPhoto,
  ModalContainer,
} from "./SideBar.style.js";
import LogoutModal from "../LogoutModal/LogoutModal";
import CreatePost from "../CreatePost/CreatePost";

function SideBar() {
  const [isModal, setIsModal] = useState({
    logOut: false,
    newTweet: false,
  });

  const openCloseModalHandler = (e) => {
    let newIsModal = { ...isModal };
    console.log(e.target.id);
    if (e.target.id === "logOut") {
      newIsModal.logOut = !newIsModal.logOut;
    } else if (e.target.id === "newTweet") {
      newIsModal.newTweet = !newIsModal.newTweet;
    } else {
      if (isModal.logOut) {
        newIsModal.logOut = !newIsModal.logOut;
      } else {
        newIsModal.newTweet = !newIsModal.newTweet;
      }
    }
    setIsModal(newIsModal);
  };

  const { logOut, newTweet } = isModal;

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = logOut || newTweet ? "hidden" : "auto";
  }, [logOut, newTweet]);
  return (
    <SideBarContainer>
      <Logo src={"/images/logo.svg"} alt="" />
      <nav>
        <SideBarHome>
          <SideBarHomeIcon src={"/images/home.svg"} alt="" />
          <span>Home</span>
        </SideBarHome>
        <SideBarExplore>
          <SideBarExploreIcon src={"/images/explore.svg"} alt="" />
          <span>Explore</span>
        </SideBarExplore>
        <SideBarProfile>
          <SideBarProfileIcon src={"/images/sidebarprofile.svg"} alt="" />

          <span>Profile</span>
        </SideBarProfile>
      </nav>
      <SideBarTweetButton
        id="newTweet"
        onClick={(e) => openCloseModalHandler(e)}
      >
        Post
      </SideBarTweetButton>
      {isModal.logOut ? (
        <ModalContainer onClick={openCloseModalHandler}>
          <LogoutModal openCloseModalHandler={openCloseModalHandler} />
        </ModalContainer>
      ) : null}
      {isModal.newTweet ? (
        <ModalContainer onClick={openCloseModalHandler}>
          <CreatePost openCloseModalHandler={openCloseModalHandler} />
        </ModalContainer>
      ) : null}
      <SideBarUserContainer
        id="logOut"
        onClick={(e) => openCloseModalHandler(e)}
      >
        <SideBarUserPhoto id="logOut" src={"/images/userphoto.svg"} alt="" />
        <SideBarUserId id="logOut">Sample</SideBarUserId>
        <SideBarUserEmail id="logOut">min85472@gmail.com</SideBarUserEmail>
      </SideBarUserContainer>
    </SideBarContainer>
  );
}

export default SideBar;
