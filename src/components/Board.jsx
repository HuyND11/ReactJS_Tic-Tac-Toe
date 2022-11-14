import Square from "./Square";

const Board = ({ squares, onClick }) => {
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  // Using map to render Item
  // Không dùng arowrr function
  return (
    <div className="board">
      {
        list.map((value, index) =>
          <div key={index}>
            {<Square value={squares[value]} onClick={() => onClick(value)} />}
          </div>
        )
      }
    </div>
  );
};

export default Board;
