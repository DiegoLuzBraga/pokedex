import React from "react";
import { Header } from '../../components/Header';
import { Loading } from "../../components/Loading";
import { formatRegions } from "../../utils/formatRegions";
import { gameTitleFormat } from "../../utils/gameTitleFormat";
import { useGameDetailsViewModel } from "./GameDetailsViewModel";
import s from "./style.scss";

export const GameDetails = () => {
  const { pokedex, loading, title, regions, goBack } = useGameDetailsViewModel();

  return loading ? (
      <Loading />
      ) : (
        <div className={s.gameDetails}>
        <Header title="Pokedex" goBack={goBack} />
        <div className={s.content}>
          <>
            <h3>Pokemon {gameTitleFormat(title)}</h3>
            <h4>Regions: {formatRegions(regions)}</h4>
          </>
          <div className={s.cardContent}>
            {pokedex.pokemon_entries.map(pokemon => {
              return (
                <div
                  className={s.pokemonCard}
                  key={pokemon.pokemon_species.name}
                >
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      pokemon.pokemon_species.url.split("/")[
                        pokemon.pokemon_species.url.split("/").length - 2
                      ]
                    }.png`}
                  />
                  {pokemon.pokemon_species.name.toLocaleUpperCase()}
                </div>
              );
            })}
            {!pokedex.pokemon_entries.length && (
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
