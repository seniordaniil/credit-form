import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import { selectStyles } from '../select';
import { FieldGroup } from '../field-group';
import { days, months, years } from './utils';

export const DatePicker = ({ onChange }) => {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  const change = useRef(onChange);

  useEffect(() => {
    change.current = onChange;
  }, [onChange, change]);

  useEffect(() => {
    if (day && month && year && change.current) {
      const date = new Date();
      date.setDate(day.value);
      date.setMonth(month.value);
      date.setFullYear(year.value);
      change.current(date);
    }
  }, [day, month, year, change]);

  return (
    <FieldGroup columns={3}>
      <Select
        styles={selectStyles}
        placeholder={'DD'}
        value={day}
        options={days}
        onChange={setDay}
      />
      <Select
        styles={selectStyles}
        placeholder={'MM'}
        value={month}
        options={months}
        onChange={setMonth}
      />
      <Select
        styles={selectStyles}
        placeholder={'YY'}
        value={year}
        options={years}
        onChange={setYear}
      />
    </FieldGroup>
  );
};
