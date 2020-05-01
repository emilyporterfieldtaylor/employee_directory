import React from 'react';

function TableRow(props) {
  return (
    <tr>
        <td><img src={props.employee.picture.thumbnail} /></td>
        <td>{props.employee.name.first}</td>
        <td>{props.employee.name.last}</td>
        <td>{props.employee.phone}</td>
        <td>{props.employee.email}</td>
      </tr>
  );
}

export default TableRow;