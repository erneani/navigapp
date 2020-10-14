import { IComposable } from "components/Structure/Keyboard/KeyboardWrapper/types";
import { ICanBeVideo } from "../RailCard/types";

export interface ISlider extends ICanBeVideo {
  translation: number;
}

export interface IRailSlider extends ISlider, IComposable {}
