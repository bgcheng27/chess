import { useState } from 'react'

import './Piece.css'

export default function Piece({ type, startingCoordinate }) {
    const [currentCoordinate, setCurrentCoordinate] = useState(startingCoordinate)

    const handleDragStart = (event) => {
        event.dataTransfer.setData("pieceId", event.target.id)
        event.dataTransfer.setData("dragFrom", currentCoordinate)
    }

    return (
        <img id={crypto.randomUUID()} onDragStart={handleDragStart} draggable="true" className="piece" src={type} />
    )
}