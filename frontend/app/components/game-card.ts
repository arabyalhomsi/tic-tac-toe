import Component from '@glimmer/component';
import { Players } from 'tic-tac-toe/types/game';

interface GameCardComponentProps {
  playerx: string;
  playero: string;
  winner: Players;
  date: string;
}

const WINNER_CLASS = 'game-card__winner';
const LOSER_CLASS = 'game-card__loser';

export default class GameCardComponent extends Component<GameCardComponentProps> {
  get date(): string {
    return new Date(this.args.date).toLocaleDateString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }

  get playerxClass(): string {
    return this.args.winner !== null
      ? this.args.winner === Players.X
        ? WINNER_CLASS
        : LOSER_CLASS
      : '';
  }

  get playeroClass(): string {
    return this.args.winner !== null
      ? this.args.winner === Players.O
        ? WINNER_CLASS
        : LOSER_CLASS
      : '';
  }
}
