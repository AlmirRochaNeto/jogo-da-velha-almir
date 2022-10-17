import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Game from './pages/Game.jsx';
import GameProvider from './context';

class App extends React.Component {
  render() {
    return (
    <GameProvider>
      <Switch>
        <Route exact path="/" component={ Game } />
      </Switch>
    </GameProvider>
  )}
}

export default App;
