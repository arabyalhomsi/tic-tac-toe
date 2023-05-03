export enum Players {
  X = 'X',
  O = 'O',
}

export type PlayerOrNull = Players | null;
export type Board = PlayerOrNull[];

export interface BoardState {
  finished: boolean;
  winner: PlayerOrNull;
}

export interface Game {
  id: number;
  player1: string;
  player2: string;
}
