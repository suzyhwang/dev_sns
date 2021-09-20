import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';
import { dummy, comments, posts, likes, loginUser } from '../../dummy/dummy';
import {
  PostContainer,
  PostUserImg,
  PostBody,
  PostBodyTop,
  PostUserNameDateContainer,
  PostUserName,
  PostDate,
  EditDelBtnContainer,
  PostContent,
  PostBodyBottom,
  CommentsBtn,
  LikesBtn,
} from './Post.style';

function Post({ post }) {
  const [isUserLike, setIsUserLike] = useState(false);
  const [isInUserComment, setInUserComment] = useState(false);
  const [isShowComment, setIsShowComment] = useState(false);
  const commentInPost = comments.filter((comment) => comment.postId === post.id);

  useEffect(() => {
    const userComments = comments.filter((comment) => comment.nickname === loginUser[0].nickname);
    userComments.filter((userComment) => userComment.postId === post.id).length
      ? setInUserComment(true)
      : setInUserComment(false);
  }, []);

  const likeHandler = () => {
    setIsUserLike(!isUserLike);
    if (isUserLike === true) {
      likes.pop();
    } else {
      likes.push({
        id: likes.length,
        postId: post.id,
        userId: loginUser[0].id,
      });
    }
  };

  return (
    <>
      <PostContainer>
        <PostUserImg>
          <img src={'/images/profile.svg'} alt=""></img>
        </PostUserImg>
        <PostBody>
          <PostBodyTop>
            <PostUserNameDateContainer>
              <PostUserName>{post.nickname}</PostUserName>
              <PostDate>{post.created_at.slice(0, 10)}</PostDate>
            </PostUserNameDateContainer>
            {post.nickname === loginUser[0].nickname ? (
              <EditDelBtnContainer>
                <img src={'/images/editBtn.svg'} alt="" />
                <img src={'/images/deleteBtn.svg'} alt="" />
              </EditDelBtnContainer>
            ) : null}
          </PostBodyTop>
          <PostContent>{post.post}</PostContent>
          <PostBodyBottom>
            <CommentsBtn
              onClick={() => {
                setIsShowComment(!isShowComment);
              }}
            >
              <path
                d="M11.3105 8.04492C10.8143 8.04492 10.4297 8.42949 10.4297 8.9043C10.4297 9.3791 10.8143 9.76367 11.3105 9.76367C11.7639 9.76367 12.1484 9.3791 12.1484 8.9043C12.1484 8.42949 11.7639 8.04492 11.3105 8.04492ZM5.29492 8.04492C4.79863 8.04492 4.41406 8.42949 4.41406 8.9043C4.41406 9.3791 4.79863 9.76367 5.29492 9.76367C5.74824 9.76367 6.13281 9.3791 6.13281 8.9043C6.13281 8.42949 5.74824 8.04492 5.29492 8.04492Z"
                fill={isInUserComment ? '#4AA1EB' : '#D1D9DD'}
              />
              <path
                d="M18.2072 6.41209C17.1738 4.99412 15.7301 4.04666 14.1467 3.61912V3.62127C13.7793 3.21307 13.3647 2.83709 12.9006 2.50194C9.3836 -0.0547029 4.44649 0.72518 1.87911 4.24217C-0.189837 7.09959 -0.101751 10.9431 2.00801 13.6738L2.0252 16.5226C2.0252 16.5914 2.03594 16.6601 2.05743 16.7246C2.1713 17.0877 2.55801 17.2875 2.91895 17.1736L5.63887 16.3164C6.3586 16.5721 7.10196 16.7181 7.84102 16.759L7.83028 16.7676C9.74454 18.1619 12.2539 18.5808 14.5549 17.8203L17.2856 18.7097C17.3543 18.7312 17.4252 18.7441 17.4982 18.7441C17.8785 18.7441 18.1857 18.4369 18.1857 18.0566V15.1777C20.0785 12.6082 20.1279 9.05682 18.2072 6.41209ZM5.93965 14.791L5.68184 14.6836L3.55489 15.3496L3.5334 13.1152L3.36153 12.9219C1.54395 10.7047 1.42364 7.50994 3.1252 5.166C5.19629 2.32577 9.16661 1.69842 11.9982 3.74803C14.8385 5.81268 15.468 9.77655 13.4162 12.5996C11.6953 14.9607 8.61446 15.833 5.93965 14.791ZM16.7893 14.4258L16.6174 14.6406L16.6389 16.875L14.5334 16.166L14.2756 16.2734C13.0725 16.7203 11.7898 16.7568 10.6018 16.4238L10.5975 16.4217C12.1852 15.934 13.6246 14.9457 14.6623 13.5234C16.3037 11.2611 16.5701 8.41873 15.6162 5.9953L15.6291 6.00389C16.1232 6.35838 16.5766 6.80096 16.9611 7.33592C18.5209 9.47576 18.4328 12.389 16.7893 14.4258Z"
                fill={isInUserComment ? '#4AA1EB' : '#D1D9DD'}
              />
              <path
                d="M8.30273 8.04492C7.80645 8.04492 7.42188 8.42949 7.42188 8.9043C7.42188 9.3791 7.80645 9.76367 8.30273 9.76367C8.75605 9.76367 9.14062 9.3791 9.14062 8.9043C9.14062 8.42949 8.75605 8.04492 8.30273 8.04492Z"
                fill={isInUserComment ? '#4AA1EB' : '#D1D9DD'}
              />
            </CommentsBtn>
            <div>{comments.filter((comment) => comment.postId === post.id).length}</div>
            <LikesBtn onClick={() => likeHandler()}>
              <path
                d="M14.0066 1.80762C12.3038 1.80762 10.827 2.75331 10.1002 4.13476C9.37343 2.75331 7.8966 1.80762 6.19383 1.80762C3.77128 1.80762 1.80762 3.72218 1.80762 6.08408C1.80762 10.7476 10.1002 16.0347 10.1002 16.0347C10.1002 16.0347 18.3928 10.7476 18.3928 6.08408C18.3928 3.72218 16.4291 1.80762 14.0066 1.80762Z"
                fill={isUserLike ? '#FF0000' : 'white'}
              />
              <path
                d="M19.6354 3.68874C19.3232 2.9669 18.873 2.31277 18.3101 1.76298C17.7467 1.21154 17.0825 0.773325 16.3535 0.472155C15.5977 0.15862 14.7869 -0.0018648 13.9684 1.63478e-05C12.8201 1.63478e-05 11.6997 0.314 10.7261 0.90708C10.4932 1.04895 10.2719 1.20478 10.0623 1.37457C9.85266 1.20478 9.63138 1.04895 9.39846 0.90708C8.42484 0.314 7.30448 1.63478e-05 6.15616 1.63478e-05C5.32929 1.63478e-05 4.52803 0.158171 3.77103 0.472155C3.03965 0.774509 2.38048 1.20943 1.81447 1.76298C1.25079 2.31215 0.800506 2.96643 0.489139 3.68874C0.165376 4.43998 0 5.23773 0 6.05874C0 6.83323 0.158388 7.64028 0.472834 8.46129C0.736038 9.14741 1.11337 9.8591 1.59552 10.5778C2.35951 11.7151 3.41 12.9013 4.71437 14.1037C6.8759 16.0969 9.01646 17.4738 9.1073 17.5296L9.65933 17.8831C9.9039 18.039 10.2183 18.039 10.4629 17.8831L11.0149 17.5296C11.1058 17.4715 13.244 16.0969 15.4079 14.1037C16.7122 12.9013 17.7627 11.7151 18.5267 10.5778C19.0089 9.8591 19.3885 9.14741 19.6494 8.46129C19.9639 7.64028 20.1222 6.83323 20.1222 6.05874C20.1246 5.23773 19.9592 4.43998 19.6354 3.68874V3.68874ZM10.0623 16.0434C10.0623 16.0434 1.77022 10.7383 1.77022 6.05874C1.77022 3.68874 3.73376 1.76763 6.15616 1.76763C7.85883 1.76763 9.33557 2.71656 10.0623 4.10274C10.789 2.71656 12.2657 1.76763 13.9684 1.76763C16.3908 1.76763 18.3544 3.68874 18.3544 6.05874C18.3544 10.7383 10.0623 16.0434 10.0623 16.0434Z"
                fill={isUserLike ? '#FF0000' : '#D1D9DD'}
              />
            </LikesBtn>
            <div>{likes.filter((like) => like.postId === post.id).length}</div>
          </PostBodyBottom>
        </PostBody>
      </PostContainer>
      {isShowComment
        ? commentInPost.map((postComment) => (
            <Comment comment={postComment} loginUser={loginUser}></Comment>
          ))
        : null}
    </>
  );
}

export default Post;
