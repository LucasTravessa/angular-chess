import { Color, Coords, FENChar } from '../models';

export abstract class Piece {
  protected abstract _FENChar: FENChar;
  protected abstract _directions: Coords[];

  constructor(private _color: Color) {}

  /**
   * get FENChar
   */
  public get FENChar(): FENChar {
    return this._FENChar;
  }

  /**
   * get directions
   */
  public get directions(): Coords[] {
    return this._directions;
  }

  /**
   * get color
   */
  public get color(): Color {
    return this._color;
  }
}
