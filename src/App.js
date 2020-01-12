import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Pages/main.js';
import InputSec from './Pages/inputSec.js';
import GuestSec from './Pages/guestList.js';
import Chart from "./Pages/Chart.js"


function App() {
  
  return (
    <React.Fragment>
      <Main/>
      <GuestSec/>
      <InputSec/>
      <Chart/>
    </React.Fragment>
  );
}

export default App;
