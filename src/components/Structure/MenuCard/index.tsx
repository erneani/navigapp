import React, { useEffect } from "react";
import { IMenuCard } from "./types";
import { Container, Icon } from "./style";

const MenuCard = ({
  title,
  icon,
  keyIndex,
  value,
  handleFocus,
  focused,
  isSelected,
}: IMenuCard) => {
  useEffect(() => {
    if (focused) {
      handleFocus(value);
    }
  }, [handleFocus, value, focused]);

  return (
    <Container focused={focused} keyIndex={keyIndex} isSelected={isSelected}>
      <Icon>{icon}</Icon>
      {title}
    </Container>
  );
};

export { MenuCard };
