import styled from 'styled-components';
import NickNameInput from './NickNameInput';
import EmailInput from './EmailInput';
import SelectBirthBlock from './SelectBirthBlock';

const ForgotPasswordContainer = styled.div`
  padding :  10px 30px 20px 30px;
  font-family: Roboto;
`;

export const ForgotPwLogo = styled.div`
  text-align : center;
  padding : 0 0 10px 0;
  img{
    width : 40px;
  }
`;

export const InfoText = styled.div`
  font-weight : bold;
  font-size : ${props => props.position === "top" ? "1.4rem" : "1rem"};
  margin : ${props => props.position === "top" ? "10px 0 30px 0" : "0"};
`;

export const FindPasswordButton = styled.button`
  width : 550px;
  height : 45px;
  border : 1px solid #A4CDF4;
  border-radius : 42px;
  color : white;
  margin-top : ${props => props.isFail ? "30px" : "50px"};
  background : ${props => props.disabled ? "#A4CDF4" : "#4AA1EB"};
  font-size : 1.2rem;
  font-weight : bold;
}
`

export const FailMessage = styled.div`
  width : 550px;
  height : 20px;
  font-size : 1rem;
  text-align: center;
  color : #E34A49;
`;

function ForgotPasswordForm({ nickNameValue, emailValue, nickNameHandler, emailHandler, findPwHandler, isDisabled, isFail, getBirthDayHandler }) {

  return (
    <ForgotPasswordContainer>
      <ForgotPwLogo>
        <img src={"/images/logo.svg"} alt={"logo"}></img>
      </ForgotPwLogo>
      <InfoText position={"top"}>가입 정보를 입력해 주세요</InfoText>
      <NickNameInput nickNameValue={nickNameValue} nickNameHandler={nickNameHandler} />
      <EmailInput emailValue={emailValue} emailHandler={emailHandler} />
      <InfoText>생년월일</InfoText>
      <SelectBirthBlock getBirthDayHandler={getBirthDayHandler} />
      {isFail ? <FailMessage>입력하신 정보를 다시 확인해 주세요.</FailMessage> : null}
      <FindPasswordButton isFail={isFail} disabled={isDisabled} onClick={findPwHandler}>비밀번호 찾기</FindPasswordButton>
    </ForgotPasswordContainer>
  );
}

export default ForgotPasswordForm;