import React from 'react';
import './App.css';
import MyDatePicker from './mydatepicker/myDatePicker';

function App() {
  return (
    <div className="App">
      <MyDatePicker
        // date='2008-01-23'
        onSelect={(date) => {
          console.log(date);
        }}
      />
    </div>
  );
}

export default App;
