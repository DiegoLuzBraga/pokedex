import { useEffect, useState } from "react";
import { useNotification } from "../../hooks/useNotification";
import { useStore } from "../../session/RootSession";
import { useGameDetailsModel } from "./GameDetailsModel";
import { BaseResult } from "../../@types/interfaces";

interface Pokedex extends BaseResult {
  entryNumber: number;
}

export const useGameDetailsViewModel = () => {
  const gameDetailsModel = useGameDetailsModel();
  const { gameSession, routerStore } = useStore();
  const notification = useNotification();
  const [pokedex, setPokedex] = useState<Pokedex[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (gameSession.gameVersionUrl) {
      getGameDetails();
    } else {
      routerStore.push("/");
    }
  }, []);

  const getGameDetails = async () => {
    setLoading(true);
    await gameDetailsModel.getGameDetails(
      gameSession.gameVersionUrl,
      async (response) => {
        gameSession.setGameDataByField("title", response.name);
        gameSession.setGameDataByField("region", response.main_region.name);
        gameSession.setGameDataByField(
          "pokemonEntries",
          response.pokemon_species.length.toString()
        );
        const pokedexFormatted = response.pokemon_species.map((pokemon) => ({
          ...pokemon,
          entryNumber: Number(
            pokemon.url.split("/")[pokemon.url.split("/").length - 2]
          ),
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
    title: gameSession.gameData.title,
    region: gameSession.gameData.region,
    entries: gameSession.gameData.pokemonEntries,
    loading,
    setLoading,
    goBack,
  } as const;
};
