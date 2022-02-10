import React from 'react';
import FetchAPI from './Components/API/FetchAPI';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome</h1>
      </header>
      <div className="content">
      <h2>Episode List</h2>
      <FetchAPI/>
      </div>
    </div>
  );
}

export default App;
