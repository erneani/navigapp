import { observable, action, computed } from "mobx";

class Menu {
  @observable focusedComponent = 1;
  @observable focusedValue = "search";
  @observable selectedMenuValue = "";

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

  @action setSelectedMenuValue = (newSelectedMenuValue: string) => {
    this.selectedMenuValue = newSelectedMenuValue;
  };

  @computed getSelectedMenuValue = () => {
    return this.selectedMenuValue;
  };
}

export const menuState = new Menu();
