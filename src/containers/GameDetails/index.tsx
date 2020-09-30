import React from "react";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { gameTitleFormat } from "../../utils/gameTitleFormat";
import { Error } from "../../components/Error";
import { useGameDetailsViewModel } from "./GameDetailsViewModel";
import { useGameDetailsViewModelMock } from "./__mocks__/GameDetailsViewModelMock";
import s from "./style.scss";

export const GameDetails = () => {
  const { pokedex, loading, title, region, entries, goBack } = process.env
    .UNIT_TEST
    ? useGameDetailsViewModelMock()
    : useGameDetailsViewModel();

  return loading ? (
    <Loading />
  ) : (
    <div className={s.gameDetails}>
      {!pokedex.length ? (
        <Error />
      ) : (
        <>
          <Header title="Pokedex" goBack={goBack} />
          <div className={s.content}>
            <div className={s.regionProfile}>
              <h3>{gameTitleFormat(title)}</h3>
              <div className={s.regionData}>
                <h4>Region: {region}</h4>
                <h4>Entries: {entries}</h4>
              </div>
            </div>
            <div className={s.cardContent}>
              {pokedex.map((pokemon) => {
                return (
                  <div className={s.pokemonCard} key={pokemon.name}>
                    <span>{pokemon.entryNumber}</span>
                    <img
                      loading="lazy"
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        pokemon.url.split("/")[
                          pokemon.url.split("/").length - 2
                        ]
                      }.png`}
                    />
                    {capitalizeFirstLetter(pokemon.name)}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
