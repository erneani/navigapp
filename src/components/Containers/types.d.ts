interface IContainer {
  isContainerFocused: boolean;
  changeSection: (name: string) => void;
  setSearchKeyword?: (value: string) => void;
  searchKeyword?: string;
}
