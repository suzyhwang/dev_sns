import React from "react";
import {
  DeleteTweetContainer,
  DeleteTweetText,
  DeleteTweetButton,
  DeleteCancelButton,
} from "../DeleteTweet/DeleteTweet.style";

function DeleteTweet() {
  return (
    <>
      <DeleteTweetContainer>
        <DeleteTweetText>Delete Tweet?</DeleteTweetText>
        <DeleteTweetButton>Delete</DeleteTweetButton>
        <DeleteCancelButton>Cancel</DeleteCancelButton>
      </DeleteTweetContainer>
    </>
  );
}

export default DeleteTweet;
