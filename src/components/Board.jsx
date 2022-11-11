import Squares from "./Squares";

const Board = ({ squares, onClick }) => {
  // const rows = [];
  // for (let index = 0; index <= 9; index++) {
  //   <Squares value={squares[index]} onClick={(index) => onClick(index)} />;
  // }
  return (
    <div className="board">
      <div>{<Squares value={squares[0]} onClick={() => onClick(0)} />}</div>
      <div>{<Squares value={squares[1]} onClick={() => onClick(1)} />}</div>
      <div>{<Squares value={squares[2]} onClick={() => onClick(2)} />}</div>
      <div>{<Squares value={squares[3]} onClick={() => onClick(3)} />}</div>
      <div>{<Squares value={squares[4]} onClick={() => onClick(4)} />}</div>
      <div>{<Squares value={squares[5]} onClick={() => onClick(5)} />}</div>
      <div>{<Squares value={squares[6]} onClick={() => onClick(6)} />}</div>
      <div>{<Squares value={squares[7]} onClick={() => onClick(7)} />}</div>
      <div>{<Squares value={squares[8]} onClick={() => onClick(8)} />}</div>
    </div>
  );
};

export default Board;
