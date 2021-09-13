import InputNickname from '../InputNickname/InputNickname';
import InputEmail from '../InputEmail/InputEmail';
import SelectBirth from '../SelectBirth/SelectBirth';
import {
  ForgotPasswordContainer,
  ForgotPwLogo,
  InfoText,
  FindPasswordButton,
  FailMessage,
} from './ForgotPasswordForm.style';

function ForgotPasswordForm({
  values,
  isDisabled,
  inputHandler,
  findPwHandler,
  getBirthDayHandler,
}) {
  const { nickname, email, isFail } = values;
  return (
    <ForgotPasswordContainer>
      <ForgotPwLogo>
        <img src={'/images/logo.svg'} alt={'logo'}></img>
      </ForgotPwLogo>
      <InfoText position={'top'}>가입 정보를 입력해 주세요</InfoText>
      <InputNickname nickname={nickname} inputHandler={inputHandler} />
      <InputEmail email={email} inputHandler={inputHandler} />
      <InfoText>생년월일</InfoText>
      <SelectBirth getBirthDayHandler={getBirthDayHandler} />
      {isFail ? <FailMessage>입력하신 정보를 다시 확인해 주세요.</FailMessage> : null}
      <FindPasswordButton isFail={values.isFail} disabled={isDisabled} onClick={findPwHandler}>
        비밀번호 찾기
      </FindPasswordButton>
    </ForgotPasswordContainer>
  );
}

export default ForgotPasswordForm;
