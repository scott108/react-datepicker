import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyDatePicker from './mydatepicker/myDatePicker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyDatePicker
          date='2008-01-23'
          onSelect={(date) => {
            console.log(date);
          }}
        />
      </header>
    </div>
  );
}

export default App;
