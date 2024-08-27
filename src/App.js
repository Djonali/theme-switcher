import logo from './logo.svg';
import './App.css';
import ThemeContext from './ThemeContext';
import React, {  useContext } from 'react';


function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="App">
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

export default App;
