import { useState } from "react";
import { dummy, posts } from "../../dummy/dummy";
import {
  Container,
  ModalView,
  TopContainer,
  TilteContainer,
  MiddleContainer,
  ButtonContainer,
  ProfileContainer,
  TextContainer,
} from "./UpdatePost.style";

const UpdatePost = () => {
  const [post, setPost] = useState(posts[0].post);

  const countStr = (post) => {
    if (post.length > 255) {
      let newPost = post.substring(0, 255);
      setPost(newPost);
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
              <div>게시물 수정</div>
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
                value={post}
                onChange={(e) => {
                  setPost(e.target.value);
                  countStr(post);
                }}
                placeholder="What’s happening?"
              ></textarea>
            </TextContainer>
          </MiddleContainer>
          <ButtonContainer>
            {post.length > 0 ? (
              <button
                onClick={() => {
                  setPost(post);
                  console.log(post);
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

export default UpdatePost;
