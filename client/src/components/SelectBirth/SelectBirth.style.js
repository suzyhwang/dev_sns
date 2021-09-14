import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 40px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.03em;
  color: #6f767c;
`;

export const MonthContainer = styled.div`
  width: 230px;
  height: 60px;
  border: solid ${(props) => (props.value !== '' ? '2px #4aa1eb' : '1px #d1d9dd')};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 5px;

  :hover {
    color: #4aa1eb;
    border: 2px solid #4aa1eb;
  }
`;

export const MonthSelect = styled.select`
  width: 220px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.025em;
  color: #000000;
  height: 30px;
  outline: none;
`;

export const DayContainer = styled.div`
  width: 130px;
  height: 60px;
  border: solid ${(props) => (props.value !== '' ? '2px #4aa1eb' : '1px #d1d9dd')};
  box-sizing: border-box;
  border-radius: 4px;
  margin: 0 12px;
  padding: 5px;

  :hover {
    color: #4aa1eb;
    border: 2px solid #4aa1eb;
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
  height: 30px;
  outline: none;
`;

export const YearContainer = styled.div`
  width: 150px;
  height: 60px;
  border: solid ${(props) => (props.value !== '' ? '2px #4aa1eb' : '1px #d1d9dd')};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 5px;

  :hover {
    color: #4aa1eb;
    border: 2px solid #4aa1eb;
  }
`;

export const YearSelect = styled.select`
  width: 140px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.025em;
  color: #000000;
  height: 30px;
  outline: none;
`;
