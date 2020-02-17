import React, { useState } from 'react';
import './myDatePicker.scss';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Calendar from './components/calendar';


export default function myDatePicker(props) {
  const [seletedDate, setSelectedDate] = useState(props.date);

  return (
    <div>
      <input
        readOnly
        type="text"
        value={seletedDate}
        className={classNames('form-control')}
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"></input>
      <Calendar
        seletedDate={seletedDate}
        onSelect={(week) => {
          const date = `${week.year}-${week.month}-${week.day}`;
          setSelectedDate(date);
          props.onSelect(date);
        }}
      />
    </div>
  );
}