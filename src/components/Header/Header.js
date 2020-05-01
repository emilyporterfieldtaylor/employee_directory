import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Big Austin: Employee Directory</h1>
        <input className="form-control" type="text" value={props.searchText} placeholder="Search for Employee" onChange={props.search} />
      </div>
    </div>
  )
}

export default Header;