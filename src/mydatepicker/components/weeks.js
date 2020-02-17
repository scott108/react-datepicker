import React, { useMemo } from 'react';
import { weekHeaders } from '../utils/util';
import classNames from 'classnames';
import SelectableTableBody from './selectableTableBody';
import moment from 'moment';

export default function Weeks(props) {
  const { weeks, current, year, month, day, onSelect } = props;
  const now = useMemo(() => moment().format('YYYY-M-DD'), []);
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
        <SelectableTableBody
          rows={6}
          columns={7}
          data={weeks}
          onSelect={onSelect}
          columnHeight={50}
          renderComponent={(week) => {
            const date = `${week.year}-${week.month}-${week.day}`;
            const selected = week.year === year && week.month === month && week.day === day;
            const fontColor = selected
              ? '#fff' : week.month === current.month 
              ? (now === date ? '#db3d44' : '#000') : '#eeeeee';
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