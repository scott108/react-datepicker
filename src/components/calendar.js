import React, { useState } from 'react';
import './myDatePicker.scss';
import { creatCalendar, weekHeaders, monthNameTable } from './utils/util';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function calendar(props) {
  const seletedDateArry = props.seletedDate.split('-');
  const year = Number(seletedDateArry[0]);
  const month = Number(seletedDateArry[1]);
  const day = Number(seletedDateArry[2]);
  const [date, setDate] = useState({year, month});
  const [calendar, setCalendar] = useState(creatCalendar(year, month));
  const weeks = calendar.weeks;

  const onSwitchMonth = (type, calendar) => {
    if(type === 'right') {
      const nextMonth = calendar.nextMonth;
      setDate({year: nextMonth.year, month: nextMonth.month})
      setCalendar(creatCalendar(nextMonth.year, nextMonth.month));
    } else if(type === 'left') {
      const preMonth = calendar.preMonth;
      setDate({year: preMonth.year, month: preMonth.month})
      setCalendar(creatCalendar(preMonth.year, preMonth.month));
    }
  }

  const renderWeeksHeader = () => {
    return weekHeaders.map((head) => {
      return (
        <th key={head}>{head}</th>
      );
    });
  }

  const renderWeeksTable = () => {
    const table = [];
    let index = 0;
    for(let i = 0; i < 6; i++) {
      const column = [];
      for(let j = 0; j < 7; j++) {
        const week = weeks[index++];
        const isSelected = week.year === year && week.month === month && week.day === day;
        const fontColor = isSelected ? '#fff' : week.month === date.month? '#000' : '#A9A9A9';
        column.push(
          <td
            onClick={() => props.onSelect(week)}
            style={{
              color: fontColor
            }}
            className={classNames(isSelected? 'week_selected' : 'week')}
            key={`${i}${j}`}>
            {week.day}
          </td>
        );
      }
      table.push(
        <tr key={i}>{column}</tr>
      );
    }
    return table;
  };

  return (
    <div className={classNames('calendar')}>
      <div className={classNames('switcher')}>
        <button
          className={classNames('arrow_btn')}
          onClick={() => onSwitchMonth('left', calendar)}>
            <FontAwesomeIcon icon="angle-left" />
          </button>
          <h3>{monthNameTable[date.month]}  {date.year}</h3>
        <button
          className={classNames('arrow_btn')}
          onClick={() => onSwitchMonth('right', calendar)}>
            <FontAwesomeIcon icon="angle-right" />
          </button>
      </div>
      <table style={{width: '100%', hieght: '100%'}}>
        <thead>
          <tr>
            {renderWeeksHeader()}
          </tr>
        </thead>
        <tbody>
          {renderWeeksTable()}
        </tbody>
      </table>
    </div>
  )
}