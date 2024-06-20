import { FENChar } from '../../chess-logic/models';

type SquarewithPiece = {
  piece: FENChar;
  x: number;
  y: number;
};

type SquareWithoutPiece = {
  piece: null;
};

export type SelectedSquare = SquarewithPiece | SquareWithoutPiece;

export const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const;
