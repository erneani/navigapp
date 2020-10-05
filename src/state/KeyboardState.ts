import { observable, action, computed } from "mobx";

class Keyboard {
  @observable focusedComponent = 11;
  @observable focusedValue = "";
  @observable keyword = "";

  @action setFocusedComponent = (newFocusedComponent: number) => {
    this.focusedComponent = newFocusedComponent;
  };

  @computed getFocusedComponent = () => {
    return this.focusedComponent;
  };

  @action setFocusedValue = (newValue: string) => {
    this.focusedValue = newValue;
  };

  @computed getFocusedValue = () => {
    return this.focusedValue;
  };

  @action setSelectedKeyword = (newKeyword: string) => {
    this.keyword = newKeyword;
  };

  @computed getSelectedKeyword = () => {
    return this.keyword;
  };
}

export const keyboardState = new Keyboard();
