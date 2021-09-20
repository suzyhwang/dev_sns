import React, { useEffect, useState } from "react";

import {
  HomeContainer,
  TopContainer,
  HomePost,
  HomePostContainer,
  HomePostButton,
  BottomContainer,
  UserPhoto,
  ButtonContainer,
  LineBetween,
} from "../Home/Home.style";
function Home() {
  const [text, setText] = useState("");
  const [Isdisabled, setIsDisabled] = useState(true);

  const countStr = (e) => {
    setText(e.target.value);
    if (e.target.value.length > 0) {
      setIsDisabled(false);
    }
    if (e.target.value.length === 0) {
      setIsDisabled(true);
    }
    if (e.target.value.length > 255) {
      let newText = e.target.value.substring(0, 255);
      setText(newText);
    }
  };
  return (
    <>
      <HomeContainer>
        <TopContainer>
          <div>Home</div>
        </TopContainer>
        <HomePost>
          <UserPhoto src={"/images/userphoto.svg"} />
          <HomePostContainer>
            <textarea
              value={text}
              onChange={(e) => {
                countStr(e);
              }}
              placeholder="What’s happening?"
            ></textarea>
          </HomePostContainer>
        </HomePost>
        <ButtonContainer>
          <HomePostButton disabled={Isdisabled}>Post</HomePostButton>
        </ButtonContainer>
        <LineBetween />
        <BottomContainer>
          <div>Welcome to Pippy!</div>
          <span>
            This is the best place to see what’s happening in your world.
          </span>
        </BottomContainer>
      </HomeContainer>
    </>
  );
}

export default Home;
