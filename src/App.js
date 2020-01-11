import React from 'react';
import logo from './logo.svg';
import './App.css';


  const url = 'https://raw.githubusercontent.com/EgemenAv/Projects-and-Labs/master/Murder-on-the-2nd-Floor-Raw-Data.csv';   

  
  async function getData(){
        const resp = await fetch(url);
        let text = await resp.text();
        const ids = [];
        const devices = [];
        const deviceids = [];
        const events = [];
        const guestids = [];

        let table = text.split('\n').splice(1);
        console.log(table[0]);
        table.forEach(row=> {
          row = row.split(",");
          let id = row[0];
          ids.push(id);
          let device = row[1];
          devices.push(device);
          let deviceid = row[2];
          let event = row[3];
          let guestid = row[4];
          deviceids.push(deviceid);
          events.push(event);
          guestids.push(guestid);

        })

        console.log(ids);
        console.log(devices);
        console.log(events);
        console.log(guestids);
        console.log(deviceids);
       
  }



function App() {
  getData()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
