import Controller from '@ember/controller';
import { action } from '@ember/object';
import { BoardState, Players } from 'tic-tac-toe/types/game';
import { Board } from 'tic-tac-toe/types/game';
import { tracked } from '@glimmer/tracking';
import { GameRouteModel } from 'tic-tac-toe/routes/game';
import { postData } from 'tic-tac-toe/utils/fetch';
import { service } from '@ember/service';
import RouterService from '@ember/routing/router-service';
import { setOwner } from '@ember/application';
import { Owner } from '@ember/test-helpers/build-owner';

// TODO: try to extract this logic outside the controller
// What I think is best, especially for bigger applications with more business logic,
// is to extract all the logic that concerns the TicTacToe to a separate folder. Maybe a lib folder.
// What I mean by logic is the functions: analyzeBoard, getPlayerTurn, and some of the PlayerMove logic.
// This is better logic separation and makes testing easier.
const WINNING_STREAKS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const INITIAL_BOARD = Array<Players | null>(9).fill(null);

export default class GameController extends Controller {
  @service declare router: RouterService;

  constructor(owner: Owner) {
    super();
    setOwner(this, owner);

    // Reset the game when the user leaves the page
    this.router.on('routeWillChange', () => {
      this.reset();
    });
  }

  queryParams = [
    { playerx: { type: 'string' as const } },
    { playero: { type: 'string' as const } },
  ];

  // This is not very correct. We should not have to declare these query parameters, as they are
  // already defined above.
  // I do not think that ember-cli-typescript supports this properly, maybe a bug/feature to submit.
  declare playerx: string;
  declare playero: string;

  declare model: GameRouteModel;

  @tracked board: Board = INITIAL_BOARD;
  @tracked winner: Players | null = null;
  @tracked finished = false;
  occupiedSquares = 0;

  @action
  async playerMove(cellId: number): Promise<void> {
    if (this.finished) {
      return;
    }

    const activePlayer = this.getPlayerTurn();

    const newBoard = this.board.slice();
    newBoard[cellId] = activePlayer;
    this.occupiedSquares = newBoard.filter((x) => x !== null).length;

    const { finished, winner } = this.analyzeBoard(newBoard);

    this.board = newBoard;
    this.winner = winner;
    this.finished = finished;

    if (finished) {
      await this.saveGame();
    }
  }

  @action
  isButtonDisabled(cell: string | null): boolean {
    return this.finished || cell !== null;
  }

  get draw(): boolean {
    return this.finished && this.winner === null;
  }

  analyzeBoard = (board: Board): BoardState => {
    // Check for the winner
    for (const streak of WINNING_STREAKS) {
      const [a, b, c] = streak.map((position) => board[position]);
      if (a !== null && a !== undefined && a === b && b === c) {
        return { finished: true, winner: a };
      }
    }

    // Check if the board has been completely filled up
    const occupiedSquares = board.filter((x) => x !== null).length;
    if (occupiedSquares === board.length) {
      return { finished: true, winner: null };
    }

    return { finished: false, winner: null };
  };

  getPlayerTurn(): Players {
    return this.occupiedSquares % 2 === 0 ? Players.X : Players.O;
  }

  async saveGame(): Promise<void> {
    if (this.playerx === '' || this.playero === '') {
      return;
    }

    try {
      await postData('/games/create', {
        playerx: this.playerx,
        playero: this.playero,
        winner: this.winner,
      });
    } catch (error: unknown) {
      // TODO: proper error handling
      console.log('error', error);
    }
  }

  // There must be a better way to do this, what I found is @trackedReset from tracked-toolbox lib
  // but it is not typescript compatible.
  reset(): void {
    this.board = INITIAL_BOARD;
    this.winner = null;
    this.finished = false;
    this.occupiedSquares = 0;
  }
}
