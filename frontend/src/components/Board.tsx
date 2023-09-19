import Piece from "./Piece";
import { CellState } from "../common/types";
import * as styles from "./Board.css";

type BoardProps = {
  board: CellState[][];
  onClick: (y: number, x: number) => void;
};

export default function Board({ board, onClick }: BoardProps) {
  return (
    <div className={styles.board}>
      {board.map((row, rowIndex) =>
        row.map((piece, cellIndex) => (
          <div
            key={`${rowIndex}-${cellIndex}`}
            className={styles.cell}
            onClick={() => {
              onClick(rowIndex, cellIndex);
            }}
          >
            <Piece pieceType={piece}></Piece>
          </div>
        ))
      )}
    </div>
  );
}