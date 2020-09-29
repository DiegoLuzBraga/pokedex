import React from "react";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { gameTitleFormat } from "../../utils/gameTitleFormat";
import { useGameDetailsViewModel } from "./GameDetailsViewModel";
import s from "./style.scss";

export const GameDetails = () => {
  const {
    pokedex,
    loading,
    title,
    region,
    entries,
    goBack,
  } = useGameDetailsViewModel();

  return loading ? (
    <Loading />
  ) : (
    <div className={s.gameDetails}>
      <Header title="Pokedex" goBack={goBack} />
      <div className={s.content}>
        <div className={s.regionProfile}>
          <h3>Pokemon {gameTitleFormat(title)}</h3>
          <h4>Region: {region}</h4>
          <h4>Pokemon Entries: {entries}</h4>
        </div>
        <div className={s.cardContent}>
          {pokedex.map((pokemon) => {
            return (
              <div className={s.pokemonCard} key={pokemon.name}>
                <span>{pokemon.entryNumber}</span>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    pokemon.url.split("/")[pokemon.url.split("/").length - 2]
                  }.png`}
                />
                {pokemon.name.toLocaleUpperCase()}
              </div>
            );
          })}
          {!pokedex.length && (
            <div className={s.error}>
              <p>Sorry, no pokemon caught</p>
              <img src="https://www.gamebyte.com/wp-content/uploads/2019/06/Pikachu-1-700x467.jpg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
