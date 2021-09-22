import React, { useState } from 'react';
import { ThreadContainer, TopContainer, BackArrow, CommentContainer } from '../Thread/Thread.style';
import Post from '../../components/Post/Post';
import Comment from '../../components/Comment/Comment';
import { posts, likes, dummy, comments, postikes, loginUser } from '../../dummy/dummy';
import {
  HomePost,
  UserPhoto,
  HomePostContainer,
  ButtonContainer,
  HomePostButton,
} from '../Home/Home.style';
function Thread() {
  const [text, setText] = useState('');
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
  function dateFormat(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    hour = hour >= 10 ? hour : '0' + hour;
    minute = minute >= 10 ? minute : '0' + minute;
    second = second >= 10 ? second : '0' + second;

    return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
  }

  let today = new Date();

  const ButtonHandler = () => {
    comments.unshift({
      id: posts.length + 1,
      postId: 0,
      nickname: 'InyongJeong',
      email: 'inyong@gmail.com',
      created_at: dateFormat(today),
      comment: text,
    });
    setText('');
    setIsDisabled(true);
  };

  return (
    <ThreadContainer>
      <TopContainer>
        <div>
          <BackArrow src={'/images/backarrow.svg'} />
          <span>Thread</span>
        </div>
      </TopContainer>
      <div>
        <Post post={posts[0]} />
      </div>
      <CommentContainer>
        <HomePost>
          <UserPhoto src={'/images/userphoto.svg'} />
          <HomePostContainer>
            <textarea
              value={text}
              onChange={(e) => {
                countStr(e);
              }}
              placeholder="Write down your reply!"
            ></textarea>
          </HomePostContainer>
        </HomePost>
        <ButtonContainer>
          <HomePostButton disabled={Isdisabled} onClick={ButtonHandler}>
            Reply
          </HomePostButton>
        </ButtonContainer>
      </CommentContainer>
      <div>
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    </ThreadContainer>
  );
}

export default Thread;
