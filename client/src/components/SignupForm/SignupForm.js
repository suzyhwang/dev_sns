import { dummy } from '../../dummy/dummy';
import { useState } from 'react';
import {
  ModalView,
  LogoContainer,
  Title,
  InputBox,
  InputContainer,
  Space,
  BirthContainer,
  BirthTitle,
  SelectContainer,
  MonthContainer,
  MonthSelect,
  YearSelect,
  DayContainer,
  DaySelect,
  YearContainer,
  Btn,
  ActivedBtn,
  CompletedModal,
} from './SignupForm.style';

const SignupForm = ({ openCloseModalHandler }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const [nickname, setNickname] = useState('');
  const [isClickedNickname, setIsClickedNickname] = useState(false);

  const [email, setEmail] = useState('');
  const [isClickedEmail, setIsClickedEmail] = useState(false);

  const [password, setPassword] = useState('');
  const [isClickedPassword, setIsClickedPassword] = useState(false);

  const [checkingPassword, setCheckingPassword] = useState('');
  const [isClickedCheckingPassword, setIsClickedCheckingPassword] = useState(false);

  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [day, setDay] = useState('');

  const monthArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const yearArr = [];
  for (let i = 2021; i > 1900; i--) {
    yearArr.push(i);
  }

  let dayArr = [];
  if (month === '02') {
    for (let i = 1; i <= 29; i++) {
      dayArr.push(i);
    }
  } else if (month === '04' || month === '06' || month === '09' || month === '11') {
    for (let i = 1; i <= 30; i++) {
      dayArr.push(i);
    }
  } else {
    for (let i = 1; i <= 31; i++) {
      dayArr.push(i);
    }
  }

  const isValidNickname = (nickname) => {
    let check = nickname.match(/\W/g);

    return nickname.length >= 6 && (check === null || check.filter((el) => el !== '.').length === 0)
      ? true
      : false;
  };

  const isValidEmail = (email) => {
    let check = email.match(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    );

    return email.indexOf('.') !== -1 && check ? true : false;
  };

  const isValidPassword = (password) => {
    let check = password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
    return check ? true : false;
  };

  const isMatchedPassword = (checkingPassword) => {
    return password === checkingPassword ? true : false;
  };

  const isValidSignUp = () => {
    return isValidNickname(nickname) &&
      isValidEmail(email) &&
      isValidPassword(password) &&
      isMatchedPassword(checkingPassword) &&
      month !== '' &&
      day !== '' &&
      year !== ''
      ? true
      : false;
  };

  const isRegistered = (value, key) => {
    return dummy.filter((el) => {
      return el[key] === value;
    }).length === 0
      ? true
      : false;
  };

  const finishSignUp = () => {
    dummy.push({
      id: dummy.length,
      nickname,
      email,
      password,
      birthDay: year + month + day,
    });
    setIsCompleted(true);
  };

  return (
    <>
      {!isCompleted ? (
        <ModalView onClick={(e) => e.stopPropagation()}>
          <LogoContainer>
            <img src={'/images/logo.svg'} width="38px" height="31.22px" alt="" />
          </LogoContainer>
          <Title>계정을 생성하세요</Title>
          <InputContainer>
            <div>
              <InputBox>
                <div
                  className={`${
                    isClickedNickname
                      ? isValidNickname(nickname) && isRegistered(nickname, 'nickName')
                        ? 'Right_Input'
                        : 'Wrong_Input'
                      : 'Default_Input'
                  }`}
                  onClick={() => {
                    setIsClickedNickname(true);
                  }}
                  tabIndex=""
                  onFocus={() => {
                    setIsClickedNickname(true);
                  }}
                >
                  <div className={`${isClickedNickname ? 'Input_Title' : 'Default_Title'}`}>
                    <div>닉네임</div>
                  </div>
                  {isClickedNickname ? (
                    <input
                      onChange={(e) => {
                        isValidNickname(nickname);
                        setNickname(e.target.value);
                      }}
                      autoFocus
                      type="text"
                      maxLength="20"
                    ></input>
                  ) : null}
                </div>
              </InputBox>
              {isClickedNickname ? (
                isRegistered(nickname, 'nickName') ? (
                  isValidNickname(nickname) ? (
                    <div className="Right_Input Valid_Comment">사용 가능한 닉네임입니다.</div>
                  ) : (
                    <div className="Wrong_Input Invalid_Comment">
                      닉네임은 영어, 숫자, -, . 만 사용 가능하며, 6글자 이상이어야 합니다.
                    </div>
                  )
                ) : (
                  <div className="Default_Input Invalid_Comment">이미 가입된 닉네임입니다.</div>
                )
              ) : (
                <Space />
              )}
            </div>
            <div>
              <InputBox>
                <div
                  className={`${
                    isClickedEmail
                      ? isValidEmail(email) && isRegistered(email, 'email')
                        ? 'Right_Input'
                        : 'Wrong_Input'
                      : 'Default_Input'
                  }`}
                  onClick={() => {
                    setIsClickedEmail(true);
                  }}
                  tabIndex="0"
                  onFocus={() => {
                    setIsClickedEmail(true);
                  }}
                >
                  <div className={`${isClickedEmail ? 'Input_Title' : 'Default_Title'}`}>
                    <div>이메일</div>
                  </div>
                  {isClickedEmail ? (
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                        isValidEmail(email);
                      }}
                      autoFocus
                      type="text"
                      maxLength="30"
                    ></input>
                  ) : null}
                </div>
              </InputBox>
              {isClickedEmail ? (
                isRegistered(email, 'email') ? (
                  isValidEmail(email) ? (
                    <div className="Right_Input Valid_Comment">사용 가능한 이메일입니다.</div>
                  ) : (
                    <div className="Wrong_Input Invalid_Comment">올바른 이메일을 입력해주세요.</div>
                  )
                ) : (
                  <div className="Wrong_Input Invalid_Comment">이미 가입된 이메일입니다.</div>
                )
              ) : (
                <Space />
              )}
            </div>
            <div>
              <InputBox>
                <div
                  className={`${
                    isClickedPassword
                      ? isValidPassword(password)
                        ? 'Right_Input'
                        : 'Wrong_Input'
                      : 'Default_Input'
                  }`}
                  onClick={() => {
                    setIsClickedPassword(true);
                  }}
                  tabIndex="0"
                  onFocus={() => {
                    setIsClickedPassword(true);
                  }}
                >
                  <div className={`${isClickedPassword ? 'Input_Title' : 'Default_Title'}`}>
                    <div>비밀번호</div>
                  </div>
                  {isClickedPassword ? (
                    <input
                      onChange={(e) => {
                        setPassword(e.target.value);
                        isValidPassword(password);
                      }}
                      autoFocus
                      type="password"
                      maxLength="128"
                    ></input>
                  ) : null}
                </div>
              </InputBox>
              {isClickedPassword ? (
                isValidPassword(password) ? (
                  <div className="Right_Input Valid_Comment">사용 가능한 비밀번호입니다.</div>
                ) : (
                  <div className="Wrong_Input Invalid_Comment">
                    비밀번호는 영어 대소문자, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.
                  </div>
                )
              ) : (
                <Space />
              )}
            </div>
            <div>
              <InputBox>
                <div
                  className={`${
                    isClickedCheckingPassword
                      ? isMatchedPassword(checkingPassword) && checkingPassword.length >= 6
                        ? 'Right_Input'
                        : 'Wrong_Input'
                      : 'Default_Input'
                  }`}
                  onClick={() => {
                    setIsClickedCheckingPassword(true);
                  }}
                  tabIndex="0"
                  onFocus={() => {
                    setIsClickedCheckingPassword(true);
                  }}
                >
                  <div className={`${isClickedCheckingPassword ? 'Input_Title' : 'Default_Title'}`}>
                    <div>비밀번호 확인</div>
                  </div>
                  {isClickedCheckingPassword ? (
                    <input
                      onChange={(e) => {
                        setCheckingPassword(e.target.value);
                        isMatchedPassword(checkingPassword);
                      }}
                      autoFocus
                      type="password"
                      maxLength={50}
                    ></input>
                  ) : null}
                </div>
              </InputBox>
              {isClickedCheckingPassword ? (
                isMatchedPassword(checkingPassword) && checkingPassword.length >= 6 ? (
                  <div className="Right_Input Valid_Comment">비밀번호가 일치합니다.</div>
                ) : (
                  <div className="Wrong_Input Invalid_Comment">비밀번호를 다시 확인해 주세요.</div>
                )
              ) : (
                <Space />
              )}
            </div>
          </InputContainer>
          <BirthContainer>
            <BirthTitle>생년월일</BirthTitle>
            <div>
              이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정 주제에 상관 없이
              나의 연력을 입력하세요
            </div>
            <SelectContainer>
              <div>
                <MonthContainer value={month}>
                  <div>월</div>
                  <MonthSelect
                    onChange={(e) => {
                      if (e.target.value > 9) {
                        setMonth(e.target.value);
                      } else {
                        setMonth('0' + e.target.value);
                      }
                    }}
                  >
                    <option value="none" hidden></option>;
                    {monthArr.map((el, idx) => {
                      return (
                        <option key={idx} value={el}>
                          {el}
                        </option>
                      );
                    })}
                  </MonthSelect>
                </MonthContainer>
              </div>
              <DayContainer value={day}>
                <div>일</div>
                <DaySelect
                  onChange={(e) => {
                    if (e.target.value > 9) {
                      setDay(e.target.value);
                    } else {
                      setDay('0' + e.target.value);
                    }
                  }}
                >
                  <option value="none" hidden></option>;
                  {dayArr.map((el, idx) => {
                    return (
                      <option key={idx} value={el}>
                        {el}
                      </option>
                    );
                  })}
                </DaySelect>
              </DayContainer>
              <YearContainer value={year}>
                <div>년</div>
                <YearSelect
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                >
                  <option value="none" hidden></option>;
                  {yearArr.map((el, idx) => {
                    return (
                      <option key={idx} value={el}>
                        {el}
                      </option>
                    );
                  })}
                </YearSelect>
              </YearContainer>
            </SelectContainer>
            {isValidSignUp(month, day, year) ? (
              <ActivedBtn
                onClick={() => {
                  finishSignUp();
                }}
              >
                가입
              </ActivedBtn>
            ) : (
              <Btn>가입</Btn>
            )}
          </BirthContainer>
        </ModalView>
      ) : (
        <CompletedModal onClick={(e) => e.stopPropagation()}>
          <LogoContainer>
            <img src={'/images/logo.svg'} width="38px" height="31.22px" alt="" />
          </LogoContainer>
          <div className="Complete_Title">축하합니다</div>
          <div className="Complete_Comment">{nickname}님의 회원가입이 완료되었습니다</div>
          <ActivedBtn onClick={openCloseModalHandler}>로그인 하기</ActivedBtn>
        </CompletedModal>
      )}
    </>
  );
};

export default SignupForm;
