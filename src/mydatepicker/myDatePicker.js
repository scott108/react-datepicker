import React, { useState, useMemo } from 'react';
import './myDatePicker.scss';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Calendar from './components/calendar';
import moment from 'moment';
import { dateISOFormat } from './utils/util';

export default function MyDatePicker(props) {
  const now = useMemo(() => moment().format('YYYY-MM-DD'), []);
  const [seletedDate, setSelectedDate] = useState(props.date || now);
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className={classNames('datepicker')}>
      <FontAwesomeIcon className={classNames('input_icon')} icon="calendar-alt" />
      <input
        onFocus={() => setShowCalendar(true)}
        onChange={(event) => {
          setSelectedDate(event.target.value)
        }}
        type="text"
        value={seletedDate}
        className={classNames('form-control')}
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"></input>
      {showCalendar && <Calendar
        seletedDate={seletedDate}
        onSelect={(week) => {
          const date = dateISOFormat(week);
          setSelectedDate(date);
          props.onSelect(date);
          setShowCalendar(false);
        }}
      />}
    </div>
  );
}