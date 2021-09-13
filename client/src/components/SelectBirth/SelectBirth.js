import React, { useState } from 'react';
import { SelectContainer, SelectYear, SelectMonth, SelectDay } from './SelectBirth.style';

function SelectBirth({ getBirthDayHandler }) {
  const [selectMonth, setSelectMonth] = useState('0');
  const [selectDay, setSelectDay] = useState('0');
  const [selectYear, setSelectYear] = useState('0');

  const selectMonthHandler = (e) => {
    setSelectMonth(e.target.value);
    getBirthDayHandler(selectYear, e.target.value, selectDay);
  };

  const selectDayHandler = (e) => {
    setSelectDay(e.target.value);
    getBirthDayHandler(selectYear, selectMonth, e.target.value);
  };

  const selectYearHandler = (e) => {
    setSelectYear(e.target.value);
    getBirthDayHandler(e.target.value, selectMonth, selectDay);
  };

  const BirthChoice = (string) => {
    let arr = [<option value="none" key="0" hidden></option>];
    let start = 1;
    let end;

    if (string === 'month') {
      end = 12;
      for (let i = start; i <= end; i++) {
        arr.push(
          <option key={i} value={i}>
            {i + '월'}
          </option>,
        );
      }
    } else if (string === 'day') {
      if (selectMonth === '2') {
        end = 29;
      } else if (
        selectMonth === '4' ||
        selectMonth === '6' ||
        selectMonth === '9' ||
        selectMonth === '11'
      ) {
        end = 30;
      } else {
        end = 31;
      }

      for (let i = start; i <= end; i++) {
        arr.push(
          <option key={i} value={i}>
            {i}
          </option>,
        );
      }
    } else {
      start = new Date().getFullYear();
      end = 1910;
      for (let i = start; i >= end; i--) {
        arr.push(
          <option key={i} value={i}>
            {i}
          </option>,
        );
      }
    }
    return arr;
  };

  return (
    <SelectContainer>
      <SelectMonth
        value={selectMonth}
        onChange={(e) => {
          selectMonthHandler(e);
        }}
      >
        {BirthChoice('month')}
      </SelectMonth>
      <SelectDay
        value={selectDay}
        onChange={(e) => {
          selectDayHandler(e);
        }}
      >
        {BirthChoice('day')}
      </SelectDay>
      <SelectYear
        value={selectYear}
        onChange={(e) => {
          selectYearHandler(e);
        }}
      >
        {BirthChoice('year')}
      </SelectYear>
    </SelectContainer>
  );
}

export default SelectBirth;
