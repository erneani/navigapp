import React, { useEffect, useCallback, useState } from "react";
import { observer } from "mobx-react";
import { MenuCard } from "components/Structure/MenuCard";
import { menuState } from "state";
import { Container } from "./style";
import {
  Home,
  AccountCircle,
  Search,
  Layers,
  SettingsInputAntenna,
} from "@material-ui/icons";

const menuData = [
  {
    title: "Buscar",
    icon: <Search />,
    value: "search",
  },
  {
    title: "Início",
    icon: <Home />,
    value: "start",
  },
  {
    title: "Agora na TV",
    icon: <SettingsInputAntenna />,
    value: "now",
  },
  {
    title: "Categorias",
    icon: <Layers />,
    value: "categories",
  },
  {
    title: "Minha conta",
    icon: <AccountCircle />,
    value: "account",
  },
];

const Menu = observer(({ isContainerFocused, changeSection }: IContainer) => {
  const [focusedComponent, setFocusedComponent] = useState<number | null>(1);
  const [selectedMenuItem, setSelectedMenuItem] = useState("search");

  const handleConfirm = (value: string) => {
    menuState.setFocusedValue(value);
  };

  const handleKeyDown = useCallback(
    (event: any) => {
      switch (event.keyCode) {
        case 38:
          if (menuState.getFocusedComponent() > 1) {
            setFocusedComponent(menuState.getFocusedComponent() - 1);
            menuState.setFocusedComponent(menuState.getFocusedComponent() - 1);
          }
          break;
        case 39:
          changeSection("keyboard");
          break;
        case 40:
          if (menuState.getFocusedComponent() < menuData.length) {
            setFocusedComponent(menuState.getFocusedComponent() + 1);
            menuState.setFocusedComponent(menuState.getFocusedComponent() + 1);
          }
          break;
        case 13:
          menuState.setSelectedMenuValue(menuState.getFocusedValue());
          setSelectedMenuItem(menuState.getFocusedValue());
          break;
      }
    },
    [changeSection]
  );

  useEffect(() => {
    if (isContainerFocused) {
      window.addEventListener("keydown", handleKeyDown);
      setFocusedComponent(menuState.getFocusedComponent());
    } else {
      window.removeEventListener("keydown", handleKeyDown);
      setFocusedComponent(null);
    }
  }, [handleKeyDown, isContainerFocused]);

  return (
    <Container focused={isContainerFocused}>
      {menuData.map((item, index) => (
        <MenuCard
          title={item.title}
          value={item.value}
          icon={item.icon}
          handleFocus={handleConfirm}
          focused={focusedComponent === index + 1}
          isSelected={selectedMenuItem === item.value}
          keyIndex={index + 1}
          key={index}
        />
      ))}
    </Container>
  );
});

export { Menu };
