import { IFocusable } from "../types";

export interface IMenuCard extends IFocusable, ISelectable {
  title: string;
  value: string;
  handleFocus: (value: string) => void;
  icon: JSX.Element;
  keyIndex: number;
}

export interface ISelectable {
  isSelected: boolean;
}
