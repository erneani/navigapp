import { observable, action, computed } from "mobx";

class Rail {
  @observable focusedCard = 1;
  @observable focusedValue = "";
  @observable selectedMenuValue = "";
  @observable filter = "";

  @action setFocusedCard = (newFocusedComponent: number) => {
    this.focusedCard = newFocusedComponent;
  };

  @computed getFocusedCard = () => {
    return this.focusedCard;
  };

  @action setFocusedValue = (newValue: string) => {
    this.focusedValue = newValue;
  };

  @computed getFocusedValue = () => {
    return this.focusedValue;
  };

  @action setSelectedRailValue = (newSelectedMenuValue: string) => {
    this.selectedMenuValue = newSelectedMenuValue;
  };

  @computed getSelectedRailValue = () => {
    return this.selectedMenuValue;
  };

  @action setFilter = (newFilter: string) => {
    this.filter = newFilter;
  };

  @computed getFilter = () => {
    return this.filter;
  };
}

export const railState = new Rail();
