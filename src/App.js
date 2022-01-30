import React, { Component } from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';
import ISSProvider from './context/ISSProvider';

class App extends Component {
  render() {
    return (
      <ISSProvider>
        <div className="App">
          <h1>
            Space Station
            {' '}
            <span className="purple-font">Tracker</span>
          </h1>
          <ISSLocation />
        </div>
      </ISSProvider>
    );
  }
}

export default App;
