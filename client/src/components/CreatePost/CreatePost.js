import { useState } from "react";
import {
  ModalView,
  Container,
  TopContainer,
  MiddleContainer,
  TextContainer,
  ImgContainer,
  ButtonContainer,
} from "../CreatePost/CreatePost.style";

const CreatePost = () => {
  const [text, setText] = useState("");

  const countStr = (text) => {
    if (text.length > 255) {
      let newText = text.substring(0, 255);
      setText(newText);
    }
  };
  return (
    <>
      <Container>
        <ModalView>
          <TopContainer>
            <img src={"/images/cancelBtn.svg"}></img>
          </TopContainer>
          <MiddleContainer>
            <ImgContainer>
              <img
                src={"/images/profile.svg"}
                width="48px"
                height="48px"
                alt=""
              ></img>
            </ImgContainer>
            <TextContainer>
              <textarea
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  countStr(text);
                }}
                placeholder="What’s happening?"
              ></textarea>
            </TextContainer>
          </MiddleContainer>
          <ButtonContainer>
            {text.length > 0 ? <button>Tweet</button> : <div>Tweet</div>}
          </ButtonContainer>
        </ModalView>
      </Container>
    </>
  );
};

export default CreatePost;
