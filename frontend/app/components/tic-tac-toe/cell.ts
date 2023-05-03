import Component from '@glimmer/component';

interface CellComponentProps {
  disabled: boolean;
  text: string;
  action: () => void;
}

export default class CellComponent extends Component<CellComponentProps> {
  get buttonClasses(): string {
    // TODO: There must be someway to keep these classes in the template rather than here.
    return `mdl-button mdl-button--raised mdl-button--colored tic-tac-toe__cell ${
      this.args.disabled ? 'tic-tac-toe__cell--disabled' : ''
    }`;
  }
}
