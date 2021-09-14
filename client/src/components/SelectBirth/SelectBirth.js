import React, { useState } from 'react';
import {
  SelectContainer,
  MonthContainer,
  MonthSelect,
  DayContainer,
  DaySelect,
  YearContainer,
  YearSelect,
} from './SelectBirth.style';

function SelectBirth({ getBirthDayHandler }) {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [day, setDay] = useState('');

  const selectMonthHandler = (e) => {
    if (e.target.value > 9) {
      setMonth(e.target.value);
    } else {
      setMonth('0' + e.target.value);
    }
    getBirthDayHandler(year, e.target.value, day);
  };

  const selectDayHandler = (e) => {
    if (e.target.value > 9) {
      setDay(e.target.value);
    } else {
      setDay('0' + e.target.value);
    }
    getBirthDayHandler(year, month, e.target.value);
  };

  const selectYearHandler = (e) => {
    setYear(e.target.value);
    getBirthDayHandler(e.target.value, month, day);
  };

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

  return (
    <SelectContainer>
      <div>
        <MonthContainer value={month}>
          <div>월</div>
          <MonthSelect
            onChange={(e) => {
              selectMonthHandler(e);
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
            selectDayHandler(e);
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
            selectYearHandler(e);
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
  );
}

export default SelectBirth;
