import React from "react";

function Header(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        <input className="search" type="text" value={props.searchText} placeholder="Search for Employee" onChange={props.search} />
      </div>
    </div>
  )
}

export default Header;