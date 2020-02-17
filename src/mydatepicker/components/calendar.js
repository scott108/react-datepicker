import React, { useState } from 'react';
import { creatCalendar, monthNameTable, createYearsTable } from '../utils/util';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Weeks from './weeks';
import Months from './months';
import Years from './years';

export default function Calendar(props) {
  const seletedDateArry = props.seletedDate.split('-');
  const selectedYear = Number(seletedDateArry[0]);
  const selectedMonth = Number(seletedDateArry[1]);
  const selectedDay = Number(seletedDateArry[2]);
  const [calendar, setCalendar] = useState(creatCalendar(selectedYear, selectedMonth));
  const current = calendar.currentMonth;
  const [routingKey, setRoutingKey] = useState('weeks');
  const [yearsTable, setYearsTable] = useState(createYearsTable(current.year));

  const router = {
    weeks: {
      previous: undefined,
      next: 'months',
      onDateIncrease: () => {
        const nextMonth = calendar.nextMonth;
        setCalendar(creatCalendar(nextMonth.year, nextMonth.month));
      },
      onDateDecrease: () => {
        const preMonth = calendar.preMonth;
        setCalendar(creatCalendar(preMonth.year, preMonth.month));
      },
      renderHead: () => <h3>{monthNameTable[current.month - 1]}  {current.year}</h3>,
      render: () => <Weeks
        weeks={calendar.weeks}
        current={current}
        year={selectedYear}
        month={selectedMonth}
        day={selectedDay}
        onSelect={props.onSelect}
      />
    },
    months: {
      previous: 'weeks',
      next: 'years',
      onDateIncrease: () => {
        setCalendar(creatCalendar(current.year + 1, current.month));
      },
      onDateDecrease: () => {
        setCalendar(creatCalendar(current.year - 1, current.month));
      },
      renderHead: () => <h3>{current.year}</h3>,
      render: () => <Months
        months={monthNameTable}
        current={current}
        onSelect={(month) => {
          setCalendar(creatCalendar(current.year, month));
          onBack();
        }}
      />
    },
    years: {
      previous: 'months',
      next: undefined,
      onDateIncrease: () => {
        setYearsTable(createYearsTable(yearsTable.current + 12));
      },
      onDateDecrease: () => {
        setYearsTable(createYearsTable(yearsTable.current - 12));
      },
      renderHead: () => <h3>{yearsTable.years[1]}-{yearsTable.years[yearsTable.years.length - 2]}</h3>,
      render: () => <Years
        years={yearsTable.years}
        current={current}
        onSelect={(year) => {
          setCalendar(creatCalendar(year, current.month));
          onBack();
        }}
      />
    },
  }

  const page = router[routingKey];

  const onRoute = () => {
    page.next && setRoutingKey(page.next);
  }

  const onBack= () => {
    page.previous && setRoutingKey(page.previous);
  }

  return (
    <div className={classNames('calendar')}>
      <div className={classNames('switcher')}>
        <button
          className={classNames('arrow_btn')}
          onClick={() => page.onDateDecrease()}>
            <FontAwesomeIcon icon="angle-left" />
          </button>
          <div
            className={classNames('header')}
            onClick={() => onRoute()}>
            {page.renderHead()}
          </div>
        <button
          className={classNames('arrow_btn')}
          onClick={() => page.onDateIncrease()}>
            <FontAwesomeIcon icon="angle-right" />
          </button>
      </div>
      {page.render()}
    </div>
  )
}