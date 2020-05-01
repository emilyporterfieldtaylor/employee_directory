import React, { Component } from 'react';
import Header from "./components/Header/Header";
import TableHeader from "./components/TableHeader/TableHeader";
import TableRow from "./components/TableRow/TableRow";
import Employees from "./employee.json"

class App extends Component {
  state = {
    employees: Employees.results,
    displayList: Employees.results,
    searchText: "",
    sortColumn: "",
    sortDirection: "asc"
  };

  search = event => {
    const { value } = event.target;

    let tempEmployees = this.searchList(this.state.employees, value);

    this.setState({
      searchText: value,
      displayList: tempEmployees
    });
  };

  searchList = (employeeList, searchText) => {
    let tempEmployees = employeeList.filter(employee => {
      return employee.name.first.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
        employee.name.last.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });

    return tempEmployees;
  };

  toggleSort = (column) => {
    let tempEmployees = this.state.sortDirection === "asc" ? 
      this.state.employees.sort((a, b) => a.name[column].localeCompare(b.name[column])) :
      this.state.employees.sort((a, b) => b.name[column].localeCompare(a.name[column]));
    
    let sortDirection = this.state.sortDirection === "asc" ? "desc" : "asc";

    tempEmployees = this.searchList(tempEmployees, this.state.searchText);

    this.setState({
      displayList: tempEmployees,
      sortDirection: sortDirection
    });
  }

  render() {
    return (
      <div className="App">
        <Header searchText={this.state.searchText} search={this.search}   />
        <div className="container">
          <table className="table table-striped table-dark">
            <TableHeader toggleSort={this.toggleSort} />
            <tbody>
              {
                this.state.displayList.map((employee, index) => {
                  return <TableRow key={index} employee={employee} />
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
