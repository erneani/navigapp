import { IComposable } from "components/Structure/Keyboard/KeyboardWrapper/types";

export interface ISlider {
  translation: number;
}

export interface IRailSlider extends ISlider, IComposable {}
