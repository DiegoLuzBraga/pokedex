import { useEffect, useState } from "react";
import { useNotification } from "../../hooks/useNotification";
import { useStore } from "../../session/RootSession";
import { BaseResult } from "../../@types/interfaces";

export interface Pokedex extends BaseResult {
  entryNumber: number;
}

export const useGameDetailsViewModel = () => {
  const { gameModel, routerStore } = useStore();
  const notification = useNotification();
  const [pokedex, setPokedex] = useState<Pokedex[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (gameModel.gameVersionUrl) {
      getGameDetails();
    } else {
      routerStore.push("/");
    }
  }, []);

  const getGameDetails = async () => {
    setLoading(true);
    await gameModel.getGameDetails(
      gameModel.gameVersionUrl,
      async response => {
        gameModel.setGameDataByField("title", response.name);
        gameModel.setGameDataByField("region", response.main_region.name);
        gameModel.setGameDataByField(
          "pokemonEntries",
          response.pokemon_species.length.toString()
        );
        const pokedexFormatted = response.pokemon_species.map(pokemon => ({
          ...pokemon,
          entryNumber: Number(
            pokemon.url.split("/")[pokemon.url.split("/").length - 2]
          )
        }));
        setPokedex(
          pokedexFormatted.sort((a, b) => a.entryNumber - b.entryNumber)
        );
      },
      notification
    );
    setLoading(false);
  };

  const goBack = () => {
    routerStore.push("/");
  };

  return {
    pokedex,
    title: gameModel.gameData.title,
    region: gameModel.gameData.region,
    entries: gameModel.gameData.pokemonEntries,
    loading,
    goBack
  } as const;
};
