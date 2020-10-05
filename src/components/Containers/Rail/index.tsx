import React, { useState, useCallback, useEffect } from "react";
import { observer } from "mobx-react";
import {
  Container,
  Title,
  ItemsContainer,
  Content,
  DefaultText,
} from "./style";
import { RailCard, RailSlider } from "components/Structure/Rail";
import { railState } from "state";
import { moviesList } from "services";

const Rail = observer(
  ({ isContainerFocused, changeSection, searchKeyword }: IContainer) => {
    const [focusedCard, setFocusedCard] = useState<number | null>(1);
    const [filter, setFilter] = useState<string>("");
    const [, setSelectedRailItem] = useState("");

    const handleFocus = (value: string) => {
      railState.setFocusedValue(value);
    };

    const filterMovies = (filter: string, movies: any) => {
      return movies.filter((movie: any) =>
        movie.name.toLowerCase().includes(filter)
      );
    };

    const handleKeyDown = useCallback(
      (event: KeyboardEvent) => {
        switch (event.keyCode) {
          case 37:
            if (railState.getFocusedCard() === 1) {
              changeSection("keyboard");
            } else {
              setFocusedCard(railState.getFocusedCard() - 1);
              railState.setFocusedCard(railState.getFocusedCard() - 1);
            }
            break;
          case 39:
            if (
              railState.getFocusedCard() <
              filterMovies(railState.getFilter(), moviesList).length
            ) {
              setFocusedCard(railState.getFocusedCard() + 1);
              railState.setFocusedCard(railState.getFocusedCard() + 1);
            }
            break;
          case 13:
            railState.setSelectedRailValue(railState.getFocusedValue());
            setSelectedRailItem(railState.getFocusedValue());
        }
      },
      [changeSection]
    );

    useEffect(() => {
      setFilter(searchKeyword!);

      if (isContainerFocused) {
        window.addEventListener("keydown", handleKeyDown);
        setFocusedCard(railState.getFocusedCard());
      } else {
        window.removeEventListener("keydown", handleKeyDown);
        setFocusedCard(null);
      }
    }, [handleKeyDown, isContainerFocused, searchKeyword]);

    return (
      <Container>
        {searchKeyword!.length > 0 ? (
          <Content>
            <Title>Títulos</Title>
            <ItemsContainer>
              <RailSlider translation={Number(focusedCard) - 1 ?? 0}>
                {filterMovies(filter, moviesList).length > 0 ? (
                  filterMovies(
                    filter,
                    moviesList
                  ).map((movie: any, index: number) => (
                    <RailCard
                      focused={focusedCard === index + 1}
                      handleFocus={handleFocus}
                      value={movie.name}
                      photo={movie.name}
                      keyIndex={index + 1}
                      title={movie.name}
                      key={index}
                    />
                  ))
                ) : (
                  <DefaultText>
                    Não existe nenhum resultado para a sua busca
                  </DefaultText>
                )}
              </RailSlider>
            </ItemsContainer>
          </Content>
        ) : (
          <DefaultText>Comece a digitar para visualizar sua busca</DefaultText>
        )}
      </Container>
    );
  }
);

export { Rail };
