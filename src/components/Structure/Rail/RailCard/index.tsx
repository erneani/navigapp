import React, { useEffect } from "react";
import { Container, Wrapper } from "./style";
import { IRailCard } from "./types";

const RailCard = ({
  focused,
  title,
  keyIndex,
  photo,
  value,
  handleFocus,
}: IRailCard) => {
  useEffect(() => {
    if (focused) {
      handleFocus(value);
    }
  }, [focused, handleFocus, value]);

  return (
    <Wrapper focused={focused}>
      <Container focused={focused} keyIndex={keyIndex}>
        {title}
      </Container>
    </Wrapper>
  );
};

export { RailCard };
