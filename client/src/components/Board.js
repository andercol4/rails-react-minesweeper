import React, {useEffect, useState} from 'react';
import Tile from './Tile';
import styled from 'styled-components'

const TileRow = styled.tr`
  margin: 0px;
  padding: 0px;
  background-color: #6c6c6c;
`

function Board({game, tiles, mines}) {

  // const handleClick =  (e) => {
  //   if (e.type === 'click') {
  //     setStatus("revealed")
  //   } else if (e.type === 'contextmenu') {
  //     e.preventDefault()
  //     status === "flagged" ? setStatus("hidden") : setStatus("flagged")
  //   }
  // }

  const tileStructure = () => {
    return [...Array(game.height).keys()].map(i => {
      const row = tileRow(i+ 1)
      return(
        <TileRow>
          {row}
        </TileRow>
      )
    })
  }

  const tileRow = (row_num) => {
    const row_tiles = tiles.filter(tile => tile.x_axis === row_num)
    const jsx_tiles = row_tiles.map( (tile) => {
      return <Tile key={tile.id} {...tile}/>
    })
    return jsx_tiles
  }
  return (
    <table>
       {tileStructure()}
    </table>
  );
}

export default Board;
