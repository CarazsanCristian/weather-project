import React from 'react';
import DisplayWeather from './features/weather/displayWeather/DisplayWeather';
import SearchInteface from './features/weather/searchInterface/SearchInput';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchInteface />
      <DisplayWeather />
    </div>
  );
}

export default App;
