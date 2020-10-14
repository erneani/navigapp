import React from "react";
import { Key } from "../Key";
import { IKeyboardRow } from "./types";
import { Container } from "./style";

const KeyRow = ({
  keys = [],
  rowIndex = 0,
  focusedComponent,
  handleFocus = () => {},
  children,
}: IKeyboardRow) => {
  const parseKeyboardIndex = (rowValue: number, columnValue: number) => {
    // Return the row + column value as a decimal value:
    // 11, 12, 13
    // 21, 22, 23
    // and so on...
    return Number(String(rowValue) + String(columnValue));
  };

  return (
    <Container>
      {keys.map((key, index) => (
        <Key
          focused={
            focusedComponent === parseKeyboardIndex(rowIndex + 1, index + 1)
          }
          value={key}
          handleFocus={handleFocus}
          keyIndex={parseKeyboardIndex(rowIndex + 1, index + 1)}
          key={index}
        />
      ))}
      {children ?? null}
    </Container>
  );
};

export { KeyRow };
