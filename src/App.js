import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/TableContainer';

function App() {
  return (
      <div className="App">
        <Header />
        <Table />
        {/* only needs open and close if something is inside components, this will be like a wrapper for the page*/}
      </div>
  );
}

export default App;
