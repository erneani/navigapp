import { IFocusable } from "../../types";

interface IRailCard extends IFocusable {
  title: string;
  value: string;
  handleFocus: (value: string) => void;
  photo: string;
  keyIndex: number;
}
