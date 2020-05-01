import React from 'react';

function TableHeader(props) {
  return (
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col" onClick={ () =>  props.toggleSort("first")}>First Name</th>
      <th scope="col" onClick={ () =>  props.toggleSort("last")}>Last Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Email</th>
    </tr>
  </thead>

  )
}

export default TableHeader;