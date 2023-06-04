import React, {useState} from 'react';
import JSONDATA from './DATA.json';
import './index.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="app">
      <input type="text" placeholder="Search..." className="input" onChange={event => {setSearchTerm(event.target.value)}}/>
      {JSONDATA.filter(val => {
        if (searchTerm == "") {
          return val;
        } 
        else if(val['first-name'].toLowerCase().includes(searchTerm.toLowerCase()) || val['last-name'].toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }

      }).map( (val, key) => {
        return (
          <div>
            <p className='user'>{val['first-name']} {val['last-name']}</p>
          </div>
        )})
      }
    </div>
  );
}

export default App;
