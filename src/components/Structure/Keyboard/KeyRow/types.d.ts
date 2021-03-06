export interface IKeyboardRow {
  keys?: string[];
  rowIndex?: number;
  focusedComponent?: number;
  handleFocus?: (value: string) => void;
  children?: JSX.Element | JSX.Element[];
}
