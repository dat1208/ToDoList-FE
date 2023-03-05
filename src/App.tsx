import React from 'react';
import logo from './logo.svg';
import GetJob from './Components/GetJob';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>To-do List</h1>
        <div className='row'>
          <GetJob></GetJob>
        </div>
      </header>
    </div>
  );
}

export default App;
