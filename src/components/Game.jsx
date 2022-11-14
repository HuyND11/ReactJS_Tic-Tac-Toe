import { useState } from "react";
import Board from "./Board";
import calculateWinner from "../utils/CalculatorWinner";

const Game = () => {
  // Use callback 
  const [gameData, setGameData] = useState({
    histories: [Array(9).fill(null)],
    stepNumber: 0,
  });

  const moves = gameData.histories.map((ele, index) => {
    const desc = index ? "Go to move #" + index : "Go to game start";
    return (
      <li key={index}>
        <button onClick={() => jumpTo(index)}>{desc}</button>
      </li>
    );
  });

  const restartGame = () => {
    setGameData({
      histories: [Array(9).fill(null)],
      stepNumber: 0,
    });
  };

  const winner = calculateWinner(gameData.histories[gameData.stepNumber]);

  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (gameData.stepNumber % 2 === 0 ? "X" : "O");

  const handleClick = (index) => {
    const history = gameData.histories.slice(0, gameData.stepNumber + 1);
    const current = [...history[history.length - 1]];
    if (calculateWinner(current) || current[index]) {
      return;
    }
    current[index] = gameData.stepNumber % 2 === 0 ? "X" : "O";
    setGameData({
      histories: gameData.histories.concat([current]),
      stepNumber: gameData.stepNumber + 1,
    });
  };

  const jumpTo = (step) => {
    setGameData({
      histories: gameData.histories.slice(0, step + 1),
      stepNumber: step,
    });
  };
  console.log("state: ", gameData);
  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={gameData.histories[gameData.stepNumber]}
          onClick={(index) => handleClick(index)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={restartGame}>Restart</button>
        <div>{moves}</div>
      </div>
    </div>
  );
};

export default Game;
