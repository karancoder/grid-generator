import React from 'react';
import './App.scss';
import Grid from './components/Grid';
import GridController from './components/GridController';

function App() {
  return (
    <div className="container">
      <header className="App-header">
        Hello World!
      </header>
      <Grid />
      <GridController />
    </div>
  );
}

export default App;
