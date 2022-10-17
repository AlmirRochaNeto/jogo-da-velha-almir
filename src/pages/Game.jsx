import { useEffect, useState, useContext } from 'react';
import { GameContext } from '../context';
import '../styles/pages/Game.css';

function Game() {
  const { game, setGame } = useContext(GameContext);
  const [ win, setWin ] = useState('');
  const [ score, setScore ] = useState({
    player1: 0,
    player2: 0,
  })
  const { selected, one, two, three, four, five, six, seven, eight, nine } = game;

  const handleGameClick = ({ target }) => {
    const { name } = target;
    setGame(prevState => ({
      ...prevState,
      [name]: selected,
      selected: selected === 'X' ? 'O' : 'X',
    }));
};

  const restartGame = () => {
    setGame({
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
    setWin('');
  };

useEffect(() => {
  if (
  (one === "X" && two === "X" && three === "X") ||
  (one === "X" && four === "X" && seven === "X") ||
  (one === "X" && five === "X" && nine === "X") ||
  (two === "X" && five === "X" && eight === "X") ||
  (three === "X" && six === "X" && nine === "X") ||
  (three === "X" && five === "X" && seven === "X") ||
  (four === "X" && five === "X" && six === "X") ||
  (seven === "X" && eight === "X" && nine === "X")) {
    setWin('vencedor');
    setScore(prevState => ({
      ...prevState,
      player1: prevState.player1 + 1,
  }));
  } 
  if ( 
  (one === "O" && two === "O" && three === "O") ||
  (one === "O" && four === "O" && seven === "O") ||
  (one === "O" && five === "O" && nine === "O") ||
  (two === "O" && five === "O" && eight === "O") ||
  (three === "O" && six === "O" && nine === "O") ||
  (three === "O" && five === "O" && seven === "O") ||
  (four === "O" && five === "O" && six === "O") ||
  (seven === "O" && eight === "O" && nine === "O")) {
    setWin('vencedor');
    setScore(prevState => ({
      ...prevState,
      player2: prevState.player2 + 1,
  }));
 }}, [game])

return (
  <div>

  <header>
    <h1>Jogo da Velha</h1>
  </header>

  <main>

    <div className='container'>

      <div className='difficulty-container'>
        <select
          className="difficulty"
          name="difficulty"
        >
         <option>Jogar contra um amigo</option>
         <option>Fácil</option>
         <option>Médio</option>
         <option>Impossível</option>
        </select>
      </div>

      <div className='players-container'>
        <button
          type='button'
          name='player-1-x'
          className={selected === 'X' ? 'player-1-x-selected' : 'player-1-x'}
          value='X'
        >X
        <h4>{score.player1}</h4>
        </button>
        <button
          type='button'
          name='player-2-o'
          className={selected === 'O' ? 'player-2-o-selected' : 'player-2-o'}
          value='O'
        >O
        <h4>{score.player2}</h4>
        </button>
      </div>

      <div>
        <span>{
        win !== "" ?
        `Fim de jogo: "${selected === 'X' ? 'O' : 'X'}" ${win}!` :
        one !== "" && two !== "" && three !== "" &&
        four !== "" && five !== "" && six !== "" &&
        seven !== "" && eight !== "" && nine !== "" ?
        "Empate!" : `Vez de ${selected}`}
        </span>
      </div>
      
      <div className='game-container'>
        <div className='game'>
          <button
            type='button'
            name='one'
            className='one'
            style={ one === 'X' ? { color: '#545454' } : { color: '#f2ebd3'} }
            disabled={ one !== '' || win !== '' ? true : false }
            onClick={ handleGameClick }
          >{ one }
          </button>
          <button
            type='button'
            name='two'
            className='two'
            style={ two === 'X' ? { color: '#545454' } : { color: '#f2ebd3'} }
            disabled={ two !== '' || win !== '' ? true : false }
            onClick={ handleGameClick }
          >{ two }
          </button>
          <button
            type='button'
            name='three'
            className='three'
            style={ three === 'X' ? { color: '#545454' } : { color: '#f2ebd3'} }
            onClick={ handleGameClick }
            disabled={ three !== '' || win !== '' ? true : false }
          >{ three }
          </button>
          <button
            type='button'
            name='four'
            className='four'
            style={ four === 'X' ? { color: '#545454' } : { color: '#f2ebd3'} }
            disabled={ four !== '' || win !== '' ? true : false }
            onClick={ handleGameClick }
          >{ four }
          </button>
          <button
            type='button'
            name='five'
            className='five'
            style={ five === 'X' ? { color: '#545454' } : { color: '#f2ebd3'} }
            disabled={ five !== '' || win !== '' ? true : false }
            onClick={ handleGameClick }
          >{ five }
          </button>
          <button
            type='button'
            name='six'
            className='six'
            style={ six === 'X' ? { color: '#545454' } : { color: '#f2ebd3'} }
            disabled={ six !== '' || win !== '' ? true : false }
            onClick={ handleGameClick }
          >{ six }
          </button>
          <button
            type='button'
            name='seven'
            className='seven'
            style={ seven === 'X' ? { color: '#545454' } : { color: '#f2ebd3'} }
            disabled={ seven !== '' || win !== '' ? true : false }
            onClick={ handleGameClick }
          >{ seven }
          </button>
          <button
            type='button'
            name='eight'
            className='eight'
            style={ eight === 'X' ? { color: '#545454' } : { color: '#f2ebd3'} }
            disabled={ eight !== '' || win !== '' ? true : false }
            onClick={ handleGameClick }
          >{ eight }
          </button>
          <button
            type='button'
            name='nine'
            className='nine'
            style={ nine === 'X' ? { color: '#545454' } : { color: '#f2ebd3'} }
            disabled={ nine !== '' || win !== '' ? true : false }
            onClick={ handleGameClick }
          >{ nine }
          </button>
        </div>
      </div>
        <button
          type="button"
          className="restart"
          onClick={ restartGame }
        >
        Reiniciar Jogo
        </button>
      </div>

    </main>
      
    </div>
  )
}

export default Game
