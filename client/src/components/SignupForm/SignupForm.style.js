import styled from 'styled-components';

export const ModalView = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 700px;
  background: #ffffff;
  border-radius: 17px;
  padding: 0 36px;
`;

export const LogoContainer = styled.div`
  padding: 10px;
  text-align: center;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.055em;
  color: #000000;
  margin: 20px 0;
`;

export const InputContainer = styled.div`
  width: 500px;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -0.02em;

  .Invalid_Comment {
    color: #e34a49;
    margin-bottom: 14px;
    padding: 0 5px;
  }

  .Valid_Comment {
    color: #4aa1eb;
    margin-bottom: 14px;
    padding: 0 5px;
  }
`;

export const InputBox = styled.div`
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.03em;
  width: 500px;
  height: 50px;
  box-sizing: border-box;
  border-radius: 4px;

  .Default_Input {
    width: 500px;
    height: 50px;
    border: 1px solid #d1d9dd;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 13px 5px;
    color: #6f767c;

    :hover {
      color: #4aa1eb;
      border: 1px solid #4aa1eb;
      box-sizing: border-box;
      border-radius: 4px;
    }
  }

  .Wrong_Input {
    transition: padding 0.3s;
    color: #e34a49;
    width: 500px;
    height: 50px;
    border: 1px solid #e34a49;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 2px 5px;
  }

  .Right_Input {
    color: #4aa1eb;
    width: 500px;
    height: 50px;
    border: 1px solid #4aa1eb;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 2px 5px;
  }

  .Default_Title {
    font-size: 16px;
  }

  .Input_Title {
    transition: font-size 0.3s;
    font-size: 12px;
    height: 20px;
  }

  input {
    font-size: 16px;
    line-height: 21px;
    color: #000000;
    width: 484px;
    outline: none;
    border: none;
    background-color: transparent;
  }
`;

export const Space = styled.div`
  margin-bottom: 33px;
`;

export const BirthContainer = styled.div`
  padding-top: 10px;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: -0.05em;
  color: #000000;
`;

export const BirthTitle = styled.div`
  padding-bottom: 5px;
  font-weight: bold;
  font-size: 18px;
  line-height: 19px;
  letter-spacing: -0.055em;
  color: #000000;
`;

export const SelectContainer = styled.div`
  display: flex;
  margin: 10px 0 40px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.03em;
  color: #6f767c;
`;

export const MonthContainer = styled.div`
  width: 200px;
  height: 50px;
  border: solid ${(props) => (props.value !== '' ? '1px #4aa1eb' : '1px #d1d9dd')};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 5px;

  :hover {
    color: #4aa1eb;
    border: 1px solid #4aa1eb;
  }
`;

export const MonthSelect = styled.select`
  width: 190px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.025em;
  color: #000000;
  outline: none;
`;

export const DayContainer = styled.div`
  width: 130px;
  height: 50px;
  border: solid ${(props) => (props.value !== '' ? '1px #4aa1eb' : '1px #d1d9dd')};
  box-sizing: border-box;
  border-radius: 4px;
  margin: 0 12px;
  padding: 5px;

  :hover {
    color: #4aa1eb;
    border: 1px solid #4aa1eb;
  }
`;

export const DaySelect = styled.select`
  width: 120px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.025em;
  color: #000000;
  outline: none;
`;

export const YearContainer = styled.div`
  width: 145px;
  height: 50px;
  border: solid ${(props) => (props.value !== '' ? '1px #4aa1eb' : '1px #d1d9dd')};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 5px;

  :hover {
    color: #4aa1eb;
    border: 1px solid #4aa1eb;
  }
`;

export const YearSelect = styled.select`
  width: 135px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.025em;
  color: #000000;
  outline: none;
`;

export const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 45px;
  background: #a4cdf4;
  box-shadow: 0px 0px 17px -2px rgba(0, 0, 0, 0.2);
  border-radius: 42px;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.05em;
  color: #ffffff;
`;

export const ActivedBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 45px;
  background: #4aa1eb;
  box-shadow: 0px 0px 17px -2px rgba(0, 0, 0, 0.2);
  border-radius: 42px;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.05em;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  border: none;

  :active {
    background: #a4cdf4;
  }
`;

export const CompletedModal = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 250px;
  background: #ffffff;
  border-radius: 17px;
  padding: 0 36px;

  .Complete_Title {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.055em;
    color: #000000;
    margin: 10px 0;
  }

  .Complete_Comment {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #000000;
    margin-bottom: 50px;
    padding-left: 4px;
  }
`;
