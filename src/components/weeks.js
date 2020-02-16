import React from 'react';
import './myDatePicker.scss';
import { weekHeaders } from './utils/util';
import classNames from 'classnames';
import SelectedTableBody from './selectedTableBody';

export default function Weeks(props) {
  const { weeks, current, year, month, day, onSelect } = props;
  const renderWeeksHeader = () => {
    return weekHeaders.map((head) => {
      return (
        <th key={head}>{head}</th>
      );
    });
  }
  
  return (
    <table style={{width: '100%', hieght: '100%'}}>
      <thead>
        <tr>
          {renderWeeksHeader()}
        </tr>
      </thead>
      <tbody>
        <SelectedTableBody
          rows={6}
          columns={7}
          data={weeks}
          onSelect={onSelect}
          columnHeight={50}
          renderComponent={(week) => {
            const selected = week.year === year && week.month === month && week.day === day;
            const fontColor = selected ? '#fff' : week.month === current.month? '#000' : '#A9A9A9';
            return (
              <div
                style={{
                  color: fontColor
                }}
                className={classNames(selected ? 'week_item_selected' : 'week_item')}>
                {week.day}
              </div>
            );
          }}
        />
        {/* {renderWeeksTable()} */}
      </tbody>
    </table>
  )
}