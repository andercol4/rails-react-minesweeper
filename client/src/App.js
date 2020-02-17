import React, {useState, useEffect} from 'react';
import Board from './components/Board';
import axios from 'axios'

const App = () => {
  const [game, setGame] = useState({})
  const [mines, setMines] = useState([])
  const [tiles, setTiles] = useState([])

  useEffect(() => {
    axios.get("/api/games").then( (res) => {
      setTiles(res.data.tiles)
      setMines(res.data.mines)
      setGame(res.data.game)
    })
  }, [])

  const displayBoard = () => {
    if(game.id) {
      return <Board game={game} tiles={tiles} mines={mines} />
    } else {
      return null
    }
  }
  return (
    <div>
      {displayBoard()}
    </div>
  );
}

export default App;
