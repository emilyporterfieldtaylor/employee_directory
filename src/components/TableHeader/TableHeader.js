import React from 'react';

function TableHeader() {
  return (
    <div className="container">
    <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  </table>
  </div>
  )
}

export default TableHeader;