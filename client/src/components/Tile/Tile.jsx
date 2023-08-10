import './Tile.css'

import { useEffect, useState } from 'react'

export default function Tile({ color, coordinate, piece }) {
    const [isOccupied, setOccupied] = useState(false);

    useEffect(() => {
        if (piece) {
            setOccupied(true);
        }
    }, [])

    
    const handleDrop = (event) => {
        console.log(isOccupied);

        if (isOccupied) {
            return;
        }

        const pieceId = event.dataTransfer.getData("pieceId");
        let pieceOnTile = document.getElementById(pieceId);
        event.target.appendChild(pieceOnTile);

        // console.log(event.target.children.length)
    }

    const handleDragOver = (event) => {
        event.preventDefault();
    }

    return (
        <span id={coordinate} onDrop={handleDrop} onDragOver={handleDragOver} className={"tile " + color}>{piece}</span>
    )
}