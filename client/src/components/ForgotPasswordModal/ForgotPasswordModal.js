import React, { useState } from 'react';
import ForgotPasswordForm from '../ForgotPasswordForm/ForgotPasswordForm';
import SuccessFindForm from '../SuccessFindForm/SuccessFindForm';
import { dummy } from '../../dummy/dymmy';
import { ModalContainer, ModalBackdrop, ModalView } from './ForgotPasswordModal.style';

function ForgotPasswordModal({ openModalHandler }) {
  // const [nickNameValue, setNickNameValue] = useState('');
  // const [emailValue, setEmailValue] = useState('');
  // const [isFail, setIsFail] = useState(false);
  const [userInfo, setUserInfo] = useState(dummy);
  const [birthDay, setBirthDay] = useState('');

  const [values, setValues] = useState({
    nickname: '',
    email: '',
    isFail: false,
    isSuccess: false,
    userInfo: dummy,
    birthDay: '',
  });

  const inputHandler = (e) => {
    let newValues = { ...values };
    if (e.target.name === 'nickname') {
      newValues.nickname = e.target.value;
    } else if (e.target.name === 'email') {
      newValues.email = e.target.value;
    }
    // let [name, value] = e.target;
    // setValues((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
    if (window.event.keyCode === 13) {
      findPwHandler();
    }
    setValues(newValues);
  };

  // const nickNameHandler = (e) => {
  // setNickNameValue(e.target.value);
  // setIsFail(false);
  // if (window.event.keyCode === 13) {
  //   findPwHandler();
  // }
  // if (window.event.keyCode === 13) {
  //   findPwHandler();
  // }
  // if (nickNameValue.length && emailValue.length) {
  //   setIsDisabled(false);
  // } else {
  //   setIsDisabled(true);
  // }
  // };

  // const emailHandler = (e) => {
  // setEmailValue(e.target.value);
  // setIsFail(false);
  // if (window.event.keyCode === 13) {
  //   findPwHandler();
  // }
  // if (nickNameValue.length && emailValue.length) {
  //   setIsDisabled(false);
  // } else {
  //   setIsDisabled(true);
  // }
  // };

  const getBirthDayHandler = (yy, mm, dd) => {
    if (mm.length < 2 && dd.length < 2) {
      setBirthDay(`${yy}0${mm}0${dd}`);
    } else if (dd.length < 2) {
      setBirthDay(`${yy}${mm}0${dd}`);
    } else if (mm.length < 2) {
      setBirthDay(`${yy}0${mm}${dd}`);
    } else {
      setBirthDay(`${yy}${mm}${dd}`);
    }
    // if (nickNameValue.length && emailValue.length) {
    //   setIsDisabled(false);
    // } else {
    //   setIsDisabled(true);
    // }
  };

  const findPwHandler = () => {
    const findUserInfo = dummy.filter(
      (user) =>
        user.email === values.email &&
        user.nickname === values.nickname &&
        user.birthDay === birthDay,
    );
    if (!findUserInfo.length) {
      let newValues = { ...values };
      newValues.isFail = true;
      newValues.isSuccess = false;
      setValues(newValues);
    } else {
      let newValues = { ...values };
      newValues.isFail = false;
      newValues.isSuccess = true;
      setValues(newValues);
    }
    setUserInfo(findUserInfo);
  };

  const validate = () => {
    if (values.nickname.length && values.email.length && birthDay.length > 7) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <ModalContainer>
      <ModalBackdrop onClick={openModalHandler}>
        {values.isSuccess ? (
          <ModalView findPassword={'350px'} onClick={(e) => e.stopPropagation()}>
            <SuccessFindForm userInfo={userInfo} />
          </ModalView>
        ) : (
          <ModalView onClick={(e) => e.stopPropagation()}>
            <ForgotPasswordForm
              values={values}
              findPwHandler={findPwHandler}
              inputHandler={inputHandler}
              isDisabled={validate()}
              getBirthDayHandler={getBirthDayHandler}
            />
          </ModalView>
        )}
      </ModalBackdrop>
    </ModalContainer>
  );
}

export default ForgotPasswordModal;
