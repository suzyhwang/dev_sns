import React, { useState } from 'react';
import styled from 'styled-components';
import ForgotPasswordForm from './ForgotPasswordForm';
import SuccessFindForm from './SuccessFindForm';
import { dummy } from '../dummy/dummy';

export const ModalContainer = styled.div`
  display : flex;
  justify-content : center;
  font-family : Roboto;
`;

export const ModalBackdrop = styled.div`
  box-sizing : border-box;
  position : fixed;
  top : 0;
  left : 0;
  bottom : 0;
  right : 0;
  background-color : rgba(0, 0, 0, 0.6);
  z-index : 999;
`;

export const ModalView = styled.div`
  display : flex;
  position : fixed;

  top : 93px;
  left : 50%;
  -webkit-transform: translate(-50%, 0%);
  -moz-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  -o-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);

  width : 612px;
  height : ${props => props.findPassword || "560px"};
  border-radius : 17px;
  background-color : white;
`;


function ForgotPasswordModal({ openModalHandler }) {

  const [nickNameValue, setNickNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isFail, setIsFail] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [userInfo, setUserInfo] = useState(dummy);
  const [birthDay, setBirthDay] = useState('');

  const nickNameHandler = (e) => {
    setNickNameValue(e.target.value);
    setIsFail(false);
    if (window.event.keyCode === 13) {
      findPwHandler();
    }
  }

  const emailHandler = (e) => {
    setEmailValue(e.target.value);
    setIsFail(false);
    if (window.event.keyCode === 13) {
      findPwHandler();
    }
  }
 

  const getBirthDayHandler = (yy, mm, dd) => {
    if (mm.length < 2 && dd.length < 2) {
      setBirthDay(`${yy}0${mm}0${dd}`);
    }
    else if(dd.length < 2) {
      setBirthDay(`${yy}${mm}0${dd}`);
    }
    else if(mm.length < 2){
      setBirthDay(`${yy}0${mm}${dd}`);
    }
    else{
      setBirthDay(`${yy}${mm}${dd}`);
    }
    if (nickNameValue.length || emailValue.length) {
      setIsDisabled(false);
    }
    else {
      setIsDisabled(true);
    }
  }

  const findPwHandler = () => {
    const findUserInfo = dummy.filter(user => user.email === emailValue && user.nickName === nickNameValue && user.birthDay === birthDay);
    if (!findUserInfo.length > 0) {
      setIsFail(true);
      setIsSuccess(false);
    }
    else {
      setUserInfo(findUserInfo)
      setIsFail(false);
      setIsSuccess(true);
    }
  }

  return (
    <ModalContainer>
      <ModalBackdrop onClick={openModalHandler}>
        {isSuccess ?
          <ModalView findPassword={"350px"} onClick={(e) => e.stopPropagation()}>
            <SuccessFindForm userInfo={userInfo} />
          </ModalView>
          :
          <ModalView onClick={(e) => e.stopPropagation()}>
            <ForgotPasswordForm findPwHandler={findPwHandler} isFail={isFail} nickNameValue={nickNameValue} emailValue={emailValue}
              nickNameHandler={nickNameHandler} emailHandler={emailHandler} isDisabled={isDisabled} getBirthDayHandler={getBirthDayHandler} />
          </ModalView>
        }
      </ModalBackdrop>
    </ModalContainer>
  );
}

export default ForgotPasswordModal;