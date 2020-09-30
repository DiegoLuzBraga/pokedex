import { useEffect, useState } from "react";
import { useNotification } from "../../../hooks/useNotification";
import { useStore } from "../../../session/RootSession";
import { Pokedex } from "../GameDetailsViewModel";

export const useGameDetailsViewModelMock = () => {
  const { gameModel, routerStore } = useStore();
  const notification = useNotification();
  const [pokedex] = useState<Pokedex[]>([
    { entryNumber: 12, name: "Charmander", url: "Charmander" },
  ]);
  const [loading] = useState<boolean>(false);

  useEffect(() => {
    if (gameModel.gameVersionUrl) {
      getGameDetails();
    } else {
      routerStore.push("/");
    }
  }, []);

  const getGameDetails = () => {
    gameModel.getGameDetails(
      "url",
      () => {
        gameModel.setGameDataByField("title", "Pokemon Go");
        gameModel.setGameDataByField("region", "Kanto");
        gameModel.setGameDataByField("pokemonEntries", "15");
        gameModel.setGameDataByField("types", "Shadow");
      },
      notification
    );
  };

  const goBack = () => {
    routerStore.push("/");
  };

  return {
    pokedex,
    title: gameModel.gameData.title,
    region: gameModel.gameData.region,
    entries: gameModel.gameData.pokemonEntries,
    allTypes: gameModel.gameData.types,
    loading,
    goBack,
  } as const;
};
