import styled from "styled-components";

export const DeleteTweetContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 314px;
  height: 296px;

  text-align: center;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
`;

export const DeleteTweetText = styled.p`
  height: 24px;
  left: 886px;
  top: 444px;
  margin-top: 83px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;

  color: #111418;
`;

export const DeleteTweetButton = styled.button`
  width: 258px;
  height: 44px;
  left: 831px;
  top: 516px;
  margin-top: 28px;
  margin-bottom: 16px;
  background: #f60e2f;
  border-radius: 30px;
  color: white;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`;

export const DeleteCancelButton = styled.button`
  width: 258px;
  height: 44px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  background: #ffffff;
  border: 1px solid #cfd9de;
  box-sizing: border-box;
  border-radius: 30px;
  color: black;
  margin-bottom: 27px;
`;
