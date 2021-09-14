import React, { useState } from 'react';
import ForgotPasswordForm from '../ForgotPasswordForm/ForgotPasswordForm';
import SuccessFindForm from '../SuccessFindForm/SuccessFindForm';
import { dummy } from '../../dummy/dummy';
import { ModalView } from './ForgotPasswordModal.style';

function ForgotPasswordModal({ openCloseModalHandler }) {
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
    setValues(newValues);
  };

  const getBirthDayHandler = (yy, mm, dd) => {
    setBirthDay(`${yy}${mm}${dd}`);
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
    <>
      {values.isSuccess ? (
        <ModalView findPassword={'350px'} onClick={(e) => e.stopPropagation()}>
          <SuccessFindForm openCloseModalHandler={openCloseModalHandler} userInfo={userInfo} />
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
    </>
  );
}

export default ForgotPasswordModal;
