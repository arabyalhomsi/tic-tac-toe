import Component from '@glimmer/component';

interface CellComponentProps {
  disabled: boolean;
  text: string;
  action: () => void;
}

export default class CellComponent extends Component<CellComponentProps> {
  get buttonClasses(): string {
    return `mdl-button mdl-button--raised mdl-button--colored tic-tac-toe__cell ${
      this.args.disabled ? 'tic-tac-toe__cell--disabled' : ''
    }`;
  }
}
