import { useEffect, useState } from "react";
import { useNotification } from "../../hooks/useNotification";
import { useStore } from "../../session/RootSession";
import { useGameDetailsModel } from "./GameDetailsModel";
import { Pokedex } from "../../@types/interfaces";

export const useGameDetailsViewModel = () => {
  const gameDetailsModel = useGameDetailsModel();
  const { gameSession, routerStore } = useStore();
  const notification = useNotification();
  const [pokedex, setPokedex] = useState<Pokedex>({
    pokemon_entries: []
  });
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
    await gameDetailsModel.getGameDetails(async response => {
      await getVersionGroup(response.version_group.url);
      gameSession.setGameDataByField("title", response.name);
    }, notification);
  };

  const getVersionGroup = async (url: string) => {
    await gameDetailsModel.getVersionGroup(
      url,
      async response => {
        if (response.pokedexes.length) {
          const regions = response.regions.map(region => region.name);
          gameSession.setGameDataByField("regions", regions);
          await getPokedex(response.pokedexes[0].url);
        } else {
          setLoading(false);
        }
      },
      notification
    );
  };

  const getPokedex = async (url: string) => {
    await gameDetailsModel.getPokedex(
      url,
      response => setPokedex(response),
      notification
    );
    setLoading(false);
  };

  const goBack = () => {
    routerStore.push("/");
  }

  return {
    pokedex,
    title: gameSession.gameData.title,
    regions: gameSession.gameData.regions,
    loading,
    setLoading,
    goBack
  } as const;
};
