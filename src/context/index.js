import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const GameContext = createContext();

function GameProvider ({ children }) {
  const [game, setGame] = useState({
    selected: 'X',
    one: '',
    two: '',
    three : '',
    four: '',
    five: '',
    six: '',
    seven: '',
    eight: '',
    nine: '',
  });

  const context = {
    game,
    setGame,
  }

  return (
    <GameContext.Provider value={ context }>
      { children }
    </GameContext.Provider>
  );
}

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
  
export default GameProvider;