import React, { useState, useEffect, useCallback } from "react";
import { observer } from "mobx-react";
import { KeyboardWrapper, KeyRow } from "components/Structure/Keyboard";
import { keyboardState } from "state/KeyboardState";
import { Container, SearchBar } from "./style";
import { BigKey } from "components/Structure/Keyboard/BigKey";

const keyboardData = [
  ["a", "b", "c", "d", "e", "f"],
  ["g", "h", "i", "j", "k", "l"],
  ["m", "n", "o", "p", "q", "r"],
  ["s", "t", "u", "v", "w", "x"],
  ["y", "z", "0", "1", "2", "3"],
  ["4", "5", "6", "7", "8", "9"],
];

const keyboardSpecialData = [
  {
    value: "espaço",
    focusKeys: [71, 72],
  },
  {
    value: "apagar",
    focusKeys: [73, 74],
  },
  {
    value: "limpar",
    focusKeys: [75, 76],
  },
];

const keyboardSpecialDataRowIndex = keyboardData.length + 1;
const keyboardSpecialOffset = keyboardSpecialDataRowIndex * 10;

const Keyboard = observer(
  ({ isContainerFocused, changeSection, setSearchKeyword }: IContainer) => {
    const [focusedComponent, setFocusedComponent] = useState<null | number>(
      null
    );
    const [searchKeyword, setKeyboardSearchKeyword] = useState("");

    const handleFocus = (value: string) => {
      keyboardState.setFocusedValue(value);
    };

    const handleKeyDown = useCallback(
      (event: any) => {
        switch (event.keyCode) {
          case 37:
            if (String(keyboardState.getFocusedComponent()).endsWith("1")) {
              changeSection("menu");
            } else {
              if (keyboardState.getFocusedValue().length > 1) {
                setFocusedComponent(keyboardState.getFocusedComponent() - 2);
                keyboardState.setFocusedComponent(
                  keyboardState.getFocusedComponent() - 2
                );
              } else {
                setFocusedComponent(keyboardState.getFocusedComponent() - 1);
                keyboardState.setFocusedComponent(
                  keyboardState.getFocusedComponent() - 1
                );
              }
            }
            break;
          case 38:
            if (!String(keyboardState.getFocusedComponent()).startsWith("1")) {
              setFocusedComponent(keyboardState.getFocusedComponent() - 10);
              keyboardState.setFocusedComponent(
                keyboardState.getFocusedComponent() - 10
              );
            }
            break;
          case 39:
            if (String(keyboardState.getFocusedComponent()).endsWith("6")) {
              if (keyboardState.getSelectedKeyword().length > 0) {
                changeSection("rail");
              }
            } else {
              if (keyboardState.getFocusedValue().length > 1) {
                setFocusedComponent(keyboardState.getFocusedComponent() + 2);
                keyboardState.setFocusedComponent(
                  keyboardState.getFocusedComponent() + 2
                );
              } else {
                setFocusedComponent(keyboardState.getFocusedComponent() + 1);
                keyboardState.setFocusedComponent(
                  keyboardState.getFocusedComponent() + 1
                );
              }
            }
            break;
          case 40:
            if (!String(keyboardState.getFocusedComponent()).startsWith("7")) {
              setFocusedComponent(keyboardState.getFocusedComponent() + 10);
              keyboardState.setFocusedComponent(
                keyboardState.getFocusedComponent() + 10
              );
            }
            break;
          case 13:
            let newKeyword = keyboardState.getSelectedKeyword();

            if (keyboardState.getFocusedValue() === "apagar") {
              newKeyword = newKeyword.slice(0, -1);
            } else if (keyboardState.getFocusedValue() === "limpar") {
              newKeyword = "";
            } else if (keyboardState.getFocusedValue() === "espaço") {
              newKeyword = newKeyword + " ";
            } else {
              newKeyword =
                keyboardState.getSelectedKeyword() +
                keyboardState.getFocusedValue();
            }

            keyboardState.setSelectedKeyword(newKeyword);
            setSearchKeyword!(newKeyword);
            setKeyboardSearchKeyword(newKeyword);
        }
      },
      [changeSection, setSearchKeyword]
    );

    useEffect(() => {
      if (isContainerFocused) {
        window.addEventListener("keydown", handleKeyDown);
        setFocusedComponent(keyboardState.getFocusedComponent());
      } else {
        window.removeEventListener("keydown", handleKeyDown);
        setFocusedComponent(null);
      }
    }, [handleKeyDown, isContainerFocused]);

    return (
      <Container>
        <SearchBar>
          {searchKeyword.length > 0 ? searchKeyword : "Busca"}
        </SearchBar>
        <KeyboardWrapper>
          {keyboardData.map((keyRow, index) => (
            <KeyRow
              key={index}
              focusedComponent={focusedComponent ?? 0}
              handleFocus={handleFocus}
              keys={keyRow}
              rowIndex={index}
            />
          ))}
          <KeyRow>
            {keyboardSpecialData.map((key, index) => (
              <BigKey
                key={index}
                handleFocus={handleFocus}
                focused={focusedComponent ?? 0}
                value={key.value}
                focusKeysList={key.focusKeys}
                keyIndex={keyboardSpecialOffset + index}
              />
            ))}
          </KeyRow>
        </KeyboardWrapper>
      </Container>
    );
  }
);

export { Keyboard };
