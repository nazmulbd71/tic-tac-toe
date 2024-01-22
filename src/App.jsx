import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquare = squares.slice();
    nextSquare[i] = "X";
    setSquares(nextSquare);
  }
  return (
    <>
      <div className="flex">
        <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
        <Square onSquareClick={handleClick} value={squares[1]} />
        <Square onSquareClick={handleClick} value={squares[2]} />
      </div>
      <div className="flex">
        <Square onSquareClick={handleClick} value={squares[3]} />
        <Square onSquareClick={handleClick} value={squares[4]} />
        <Square onSquareClick={handleClick} value={squares[5]} />
      </div>
      <div className="flex">
        <Square onSquareClick={handleClick} value={squares[6]} />
        <Square onSquareClick={handleClick} value={squares[7]} />
        <Square onSquareClick={handleClick} value={squares[8]} />
      </div>
    </>
  );
}
