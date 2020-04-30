import React from 'react';
import Header from "./components/Header/Header";
import TableHeader from "./components/TableHeader/TableHeader";
import TableRow from "./components/TableRow/TableRow";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <table class="table table-striped table-dark">
          <TableHeader />
          <TableRow />
        </table>
      </div>
    </div>
  );
}

export default App;
