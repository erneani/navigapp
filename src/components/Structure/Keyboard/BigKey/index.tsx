import React, { useEffect } from "react";
import { IKey } from "../Key/types";
import { Container } from "../Key/style";

const BigKey = ({
  focused,
  keyIndex,
  value,
  handleFocus,
  focusKeysList = [],
}: IKey) => {
  useEffect(() => {
    if (checkFocus(focusKeysList)) {
      handleFocus(value);
    }
  });

  const checkFocus = (focusNumbers: number[]) => {
    return !!focusNumbers.find((number) => number === focused);
  };

  return (
    <Container
      focused={checkFocus(focusKeysList)}
      keyIndex={keyIndex}
      isBig={true}
    >
      {value}
    </Container>
  );
};

export { BigKey };
