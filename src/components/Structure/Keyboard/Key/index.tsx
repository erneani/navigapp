import React, { useEffect } from "react";
import { IKey } from "./types";
import { Container } from "./style";

const Key = ({ focused, keyIndex, value, handleFocus, isBig }: IKey) => {
  useEffect(() => {
    if (focused) {
      handleFocus(value);
    }
  });

  return (
    <Container focused={focused} keyIndex={keyIndex} isBig={isBig ?? false}>
      {value}
    </Container>
  );
};

export { Key };
