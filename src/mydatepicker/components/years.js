import React from 'react';
import SelectableTableBody from './selectableTableBody';
import classNames from 'classnames';

export default function Years(props) {
  const { current, onSelect, years } = props;
  return (
    <table style={{width: '100%', hieght: '100%'}}>
      <tbody>
        <SelectableTableBody
          rows={3}
          columns={4}
          columnHeight={100}
          data={years}
          onSelect={(year) => onSelect(year)}
          renderComponent={(year, index) => {
            const selected = year === current.year;
            const fontColor = selected
              ? '#fff' : (index > 0 && index < years.length - 1)
              ? '#000' : '#eeeeee';
            return (
              <div
                style={{
                  color: fontColor
                }}
                className={classNames(selected ? 'month_item_selected' : 'month_item')}>
                  {year}
              </div>
            );
          }}
        />
      </tbody>
    </table>
  )
}