import { useState } from "react";
import { dummy, comments } from "../../dummy/dummy";
import {
  Container,
  ModalView,
  TopContainer,
  TilteContainer,
  MiddleContainer,
  ButtonContainer,
  ProfileContainer,
  TextContainer,
} from "./UpdateComment.style";

const UpdateComment = () => {
  const [comment, setComment] = useState(comments[0].comment);

  const countStr = (comment) => {
    if (comment.length > 255) {
      let newComment = comment.substring(0, 255);
      setComment(newComment);
    }
  };

  return (
    <>
      <Container>
        <ModalView>
          <TopContainer>
            <TilteContainer>
              <img
                src={"/images/cancelBtn.svg"}
                width="27"
                height="31"
                alt=""
              ></img>
              <div>댓글 수정</div>
            </TilteContainer>
          </TopContainer>
          <MiddleContainer>
            <ProfileContainer>
              <img
                src={"/images/profile.svg"}
                width="48px"
                height="48px"
                alt=""
              ></img>
              <div>{dummy[0].nickname}</div>
            </ProfileContainer>
            <TextContainer>
              <textarea
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                  countStr(comment);
                }}
                placeholder="What’s happening?"
              ></textarea>
            </TextContainer>
          </MiddleContainer>
          <ButtonContainer>
            {comment.length > 0 ? (
              <button
                onClick={() => {
                  setComment(comment);
                  console.log(comment);
                }}
              >
                Tweet
              </button>
            ) : (
              <div>Tweet</div>
            )}
          </ButtonContainer>
        </ModalView>
      </Container>
    </>
  );
};

export default UpdateComment;
