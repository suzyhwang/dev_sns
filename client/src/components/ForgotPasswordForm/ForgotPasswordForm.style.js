import styled from 'styled-components';

export const ForgotPasswordContainer = styled.div`
  padding: 10px 30px 20px 30px;
  font-family: 'Roboto';
`;

export const ForgotPwLogo = styled.div`
  text-align: center;
  padding: 0 0 10px 0;
  img {
    width: 40px;
  }
`;

export const InfoText = styled.div`
  font-weight: bold;
  font-size: ${(props) => (props.position === 'top' ? '1.4rem' : '1rem')};
  margin: ${(props) => (props.position === 'top' ? '10px 0 30px 0' : '0')};
`;

export const FindPasswordButton = styled.button`
  width : 550px;
  height : 45px;
  border : 1px solid #A4CDF4;
  border-radius : 42px;
  color : white;
  margin-top : ${(props) => (props.isFail ? '30px' : '50px')};
  background : ${(props) => (props.disabled ? '#A4CDF4' : '#4AA1EB')};
  font-size : 1.2rem;
  font-weight : bold;
  cursor : pointer;
}
`;

export const FailMessage = styled.div`
  width: 550px;
  height: 20px;
  font-size: 1rem;
  text-align: center;
  color: #e34a49;
`;
