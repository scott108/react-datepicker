import React from 'react';
import classNames from 'classnames';

export default function selectedTableBody(props) {
  const {
    data,
    onSelect,
    rows,
    columns,
    renderComponent,
    columnHeight,
  } = props;
  const tableBody = [];
  let index = 0;
  for(let i = 0; i < rows; i++) {
    const row = [];
    for(let j = 0; j < columns; j++) {
      const d = data[index++];
      row.push(
        <td
          style={{height: columnHeight}}
          align='center'
          onClick={() => onSelect(d)}
          key={`${i}${j}`}>
          {renderComponent(d)}
        </td>
      );
    }
    tableBody.push(
      <tr key={i}>{row}</tr>
    );
  }
  return tableBody;
};