import { IFocusable } from "components/Structure/types";

interface IKey extends IFocusable, ICanBeBig {
  value: string;
  handleFocus: (value: string) => void;
  keyIndex: number;
  focusKeysList?: number[];
}

export interface ICanBeBig {
  isBig?: boolean;
}
