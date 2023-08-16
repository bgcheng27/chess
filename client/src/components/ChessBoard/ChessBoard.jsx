import "./ChessBoard.css";

import blackRook from "../../assets/pieces/black/blackrook.svg"
import blackKnight from "../../assets/pieces/black/blackknight.svg"
import blackBishop from "../../assets/pieces/black/blackbishop.svg"
import blackQueen from "../../assets/pieces/black/blackqueen.svg"
import blackKing from "../../assets/pieces/black/blackking.svg"
import blackPawn from "../../assets/pieces/black/blackpawn.svg"

import whiteRook from "../../assets/pieces/white/whiterook.svg"
import whiteKnight from "../../assets/pieces/white/whiteknight.svg"
import whiteBishop from "../../assets/pieces/white/whitebishop.svg"
import whiteQueen from "../../assets/pieces/white/whitequeen.svg"
import whiteKing from "../../assets/pieces/white/whiteking.svg"
import whitePawn from "../../assets/pieces/white/whitepawn.svg"


import Tile from "../Tile/Tile.jsx"
import Piece from "../Piece/Piece";
import Coordinates from "../Coordinates/Coordinates"
import { useEffect, useState } from "react";

export default function ChessBoard() {
  const horizontalCoordinates = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const verticalCoordinates = ["8", "7", "6", "5", "4", "3", "2", "1"];

  const [board, setBoard] = useState(() => {
    let loadedBoard = []

    for (let i = 0; i < verticalCoordinates.length; i++) {
        for (let j = 0; j < horizontalCoordinates.length; j++) {
        loadedBoard.push(<Tile key={crypto.randomUUID()} 
            piece={handlePieces(horizontalCoordinates[j], verticalCoordinates[i])} 
            color={(i + j) % 2 === 0 ? "light" : "dark"} 
            coordinate={horizontalCoordinates[j]+verticalCoordinates[i]}/>)
        }
    }

    return loadedBoard;
  });

  useEffect(() => {
    console.log("Board Changed");
  })

  function handlePieces(x, y) {
    let pieceType;

    if (y === "2") {
        pieceType = whitePawn;
    } else if (y === "7") {
        pieceType = blackPawn;
    } else if (y === "1") {
        if (x === "a" || x === "h") {
            pieceType = whiteRook;
        } else if (x === "b" || x === "g") {
            pieceType = whiteKnight;
        } else if (x === "c" || x === "f") {
            pieceType = whiteBishop;
        } else if (x === "d") {
            pieceType = whiteQueen;
        } else if (x === "e") {
            pieceType = whiteKing;
        }
    } else if (y === "8") {
        if (x === "a" || x === "h") {
            pieceType = blackRook;
        } else if (x === "b" || x === "g") {
            pieceType = blackKnight;
        } else if (x === "c" || x === "f") {
            pieceType = blackBishop;
        } else if (x === "d") {
            pieceType = blackQueen;
        } else if (x === "e") {
            pieceType = blackKing;
        }
    } else {
        return null;
    }

    return <Piece type={pieceType} startingCoordinate={x+y} />;
  }

  return (
    <div className="layout-container">
      <div className="board">{board}</div>
      <Coordinates coordinates={horizontalCoordinates} containerClass="hor-coor-container" labelClass="hor-coor" />
      <Coordinates coordinates={verticalCoordinates} containerClass="vert-coor-container" labelClass="vert-coor" />
    </div>
  );
}
