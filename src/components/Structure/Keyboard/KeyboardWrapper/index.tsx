import React from "react";
import { Container } from "./style";
import { IComposable } from "./types";

const KeyboardWrapper = ({ children }: IComposable) => (
  <Container>{children}</Container>
);

export { KeyboardWrapper };
