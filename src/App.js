import React from 'react';
import JSONDATA from './DATA.json';
import './index.css';

function App() {
  return (
    <div className="app">
      <input type="text" placeholder="Search..." className="input"/>
      {JSONDATA.map( (val, key) => {
        return (
          <div>{val['first-name']} {val['last-name']}</div>
        )   
      } )}
    </div>
  );
}

export default App;
