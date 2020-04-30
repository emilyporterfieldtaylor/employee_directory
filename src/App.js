import React from 'react';
import Header from "./components/Header/Header";
import TableHeader from "./components/TableHeader/TableHeader";

function App() {
  return (
    <div className="App">
      <Header />
        <TableHeader />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
