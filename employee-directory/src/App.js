import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header /> 
      {/* only needs open and close if something is inside components, this will be like a wrapper for the page*/}
    </div>
  );
}

export default App;
