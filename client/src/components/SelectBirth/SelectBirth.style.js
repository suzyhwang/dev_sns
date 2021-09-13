import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Roboto;
`;

export const SelectYear = styled.select`
  height: 60px;
  border-radius: 4px;
  font-size: 1rem;
  border: solid ${(props) => (props.value === '0' ? '1px #D1D9DD' : '2px #4AA1EB')};
  margin: 15px 0 30px 0;
  outline: none;
  cursor: pointer;
  width: 230px;
`;

export const SelectMonth = styled.select`
  height: 60px;
  border-radius: 4px;
  font-size: 1rem;
  border: solid ${(props) => (props.value === '0' ? '1px #D1D9DD' : '2px #4AA1EB')};
  margin: 15px 0 30px 0;
  outline: none;
  cursor: pointer;
  width: 150px;
`;

export const SelectDay = styled.select`
  height: 60px;
  border-radius: 4px;
  font-size: 1rem;
  border: solid ${(props) => (props.value === '0' ? '1px #D1D9DD' : '2px #4AA1EB')};
  margin: 15px 0 30px 0;
  outline: none;
  cursor: pointer;
  width: 130px;
`;
