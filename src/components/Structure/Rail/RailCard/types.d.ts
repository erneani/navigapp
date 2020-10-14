import { IFocusable } from "../../types";

interface IRailCard extends IFocusable, ICanBeVideo {
  title: string;
  value: string;
  handleFocus: (value: string) => void;
  photo: string;
  keyIndex: number;
}

interface ICanBeVideo {
  video?: boolean;
}
