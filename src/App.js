import React, { Component } from 'react';
import Header from "./components/Header/Header";
import TableHeader from "./components/TableHeader/TableHeader";
import TableRow from "./components/TableRow/TableRow";
import Employees from "./employee.json"

class App extends Component {
  state = {
    employees: Employees.results,
    displayList: Employees.results,
    search: "",
    sortType: "ascending"
  };

  render() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <table className="table table-striped table-dark">
          <TableHeader />
          <tbody>
            {
              this.state.displayList.map((employee) => {
                return <TableRow employee={employee} />
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}}

export default App;
