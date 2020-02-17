import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

const Square = styled.td`
  margin: -1px;
  padding: 0px;
  height: 20px;
  width: 20px;
  background-color: #828282;
  border: 1px solid #6c6c6c;
`

function Tile({x_axis, y_axis, contents, handleClick, status}) {

  const showStatus = () => {
    switch(status) {
      case "hidden":
        return null
      case "flagged":
        return 'F'
      case "revealed": {
        debugger
        return contents === 'M' ? 'X' : contents
      }
    }
  }

  return (
    <Square onClick={handleClick} onContextMenu={handleClick}>
      {showStatus()}
    </Square>
  );
}

export default Tile;
