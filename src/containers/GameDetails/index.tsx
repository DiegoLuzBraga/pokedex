import React from "react";
import { Loading } from "../../components/Loading";
import { useGameDetailsViewModel } from "./GameDetailsViewModel";
import s from "./style.scss";

export const GameDetails = () => {
  const { pokedex, loading } = useGameDetailsViewModel();

  return (
    <div className={s.gameDetails}>
      {loading ? (
        <Loading />
      ) : (
        <div className={s.cardContent}>
          {pokedex.pokemon_entries.map((pokemon) => {
            return (
              <div className={s.pokemonCard} key={pokemon.pokemon_species.name}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`}
                />
                {pokemon.pokemon_species.name.toLocaleUpperCase()}
              </div>
            );
          })}
          {!pokedex.pokemon_entries.length && (
            <>
              <p>Sorry, no pokemon caught :(</p>
              <img src="https://www.gamebyte.com/wp-content/uploads/2019/06/Pikachu-1-700x467.jpg" />
            </>
          )}
        </div>
      )}
    </div>
  );
};
