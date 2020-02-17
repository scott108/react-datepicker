import React from 'react';
import SelectableTableBody from './selectableTableBody';
import classNames from 'classnames';

export default function Months(props) {
  const { current, onSelect, months } = props;
  return (
    <table style={{width: '100%', hieght: '100%'}}>
      <tbody>
        <SelectableTableBody
          rows={3}
          columns={4}
          columnHeight={100}
          data={months}
          onSelect={(month) => onSelect(months.indexOf(month) + 1)}
          renderComponent={(month) => {
            const selected = months[current.month - 1] === month;
            const fontColor = selected ? '#fff' : '#000';
            return (
              <div
                style={{
                  color: fontColor
                }}
                className={classNames(selected ? 'month_item_selected' : 'month_item')}>
                  {month}
              </div>
            );
          }}
        />
      </tbody>
    </table>
  )
}