import { useState } from "react";
import { dummy, posts } from "../../dummy/dummy";
import UserInfo from "../../components/UserInfo/UserInfo";
import Post from "../../components/Post/Post";
import {
  ExploreContainer,
  TopContainer,
  MiddleContainer,
  InputBox,
  CommentContainer,
  ClickedInputBox,
  TapContainer,
  SearchContainer,
  PostsTap,
  PeopleTap,
} from "../Explore/Explore.style";

const Explore = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [searchValue, setSearchValue] = useState(null);
  const [isSearched, setIsSearched] = useState(false);
  const [clickedTap, setClickedTap] = useState("Posts");

  const enterkeyEvent = (e) => {
    if (e.code == "Enter") {
      if (searchValue.length === 0) {
        setIsSearched(false);
      } else {
        setIsSearched(true);
        setIsClicked(false);
      }
    } else {
      setIsSearched(false);
    }
  };

  return (
    <>
      <ExploreContainer>
        <TopContainer>
          <div>Explore</div>
        </TopContainer>
        {isSearched ? (
          <>
            <SearchContainer>
              {isClicked ? (
                <ClickedInputBox>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 15L11.6945 11.6886L15 15ZM13.5263 7.26316C13.5263 8.92425 12.8664 10.5173 11.6919 11.6919C10.5173 12.8664 8.92425 13.5263 7.26316 13.5263C5.60207 13.5263 4.00901 12.8664 2.83444 11.6919C1.65987 10.5173 1 8.92425 1 7.26316C1 5.60207 1.65987 4.00901 2.83444 2.83444C4.00901 1.65987 5.60207 1 7.26316 1C8.92425 1 10.5173 1.65987 11.6919 2.83444C12.8664 4.00901 13.5263 5.60207 13.5263 7.26316V7.26316Z"
                      stroke="#4aa1eb"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <input
                    id="input"
                    autoFocus
                    defaultValue={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                    }}
                    onKeyDown={(e) => {
                      enterkeyEvent(e);
                    }}
                    onClick={() => {
                      setIsClicked(true);
                    }}
                  ></input>
                  <img
                    src={"/images/resetBtn.svg"}
                    width="22"
                    height="22"
                    onClick={() => {
                      document.getElementById("input").value = null;
                      setSearchValue(null);
                      setIsSearched(false);
                    }}
                  />
                </ClickedInputBox>
              ) : (
                <InputBox>
                  <img src={"/images/searchBtn.svg"} width="16" height="16" />
                  <input
                    id="input"
                    defaultValue={searchValue}
                    onClick={() => setIsClicked(true)}
                  ></input>
                </InputBox>
              )}
              <TapContainer>
                <div
                  onClick={() => {
                    setClickedTap("Posts");
                  }}
                >
                  Posts
                  {clickedTap === "Posts" ? (
                    <div className="clicked-tap" />
                  ) : null}
                </div>
                <div
                  onClick={() => {
                    setClickedTap("People");
                  }}
                >
                  People
                  {clickedTap === "People" ? (
                    <div className="clicked-tap" />
                  ) : null}
                </div>
              </TapContainer>
            </SearchContainer>
            {clickedTap === "Posts" ? (
              <PostsTap>
                <>
                  {posts.map((post) =>
                    post.post.includes(searchValue) ? (
                      <Post post={post} />
                    ) : null
                  )}
                </>
              </PostsTap>
            ) : (
              <PeopleTap>
                <>
                  {dummy.map((userInfo) =>
                    userInfo.nickname.includes(searchValue) ? (
                      <UserInfo userInfo={userInfo} />
                    ) : null
                  )}
                </>
              </PeopleTap>
            )}
          </>
        ) : (
          <>
            <MiddleContainer>
              {isClicked ? (
                <ClickedInputBox>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 15L11.6945 11.6886L15 15ZM13.5263 7.26316C13.5263 8.92425 12.8664 10.5173 11.6919 11.6919C10.5173 12.8664 8.92425 13.5263 7.26316 13.5263C5.60207 13.5263 4.00901 12.8664 2.83444 11.6919C1.65987 10.5173 1 8.92425 1 7.26316C1 5.60207 1.65987 4.00901 2.83444 2.83444C4.00901 1.65987 5.60207 1 7.26316 1C8.92425 1 10.5173 1.65987 11.6919 2.83444C12.8664 4.00901 13.5263 5.60207 13.5263 7.26316V7.26316Z"
                      stroke="#4aa1eb"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <input
                    id="input"
                    onClick={() => setIsClicked(true)}
                    placeholder="Search pippy"
                    autoFocus
                    defaultValue={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                    }}
                    onKeyDown={(e) => {
                      enterkeyEvent(e);
                    }}
                  ></input>
                  <img
                    src={"/images/resetBtn.svg"}
                    width="22"
                    height="22"
                    onClick={() => {
                      document.getElementById("input").value = null;
                      setSearchValue(null);
                      setIsSearched(false);
                    }}
                  />
                </ClickedInputBox>
              ) : (
                <InputBox>
                  <img src={"/images/searchBtn.svg"} width="16" height="16" />
                  <input
                    id="input"
                    placeholder="Search pippy"
                    onClick={() => setIsClicked(true)}
                  ></input>
                </InputBox>
              )}
            </MiddleContainer>
            <CommentContainer onClick={() => setIsClicked(false)}>
              <div className="title">Search for what you want!</div>
              <div className="explanation">
                You can find posts and followers.
              </div>
            </CommentContainer>
          </>
        )}
      </ExploreContainer>
    </>
  );
};

export default Explore;
