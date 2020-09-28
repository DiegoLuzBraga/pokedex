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
    pokemon_entries: [],
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
    await gameDetailsModel.getGameDetails((response) => {
      getVersionGroup(response.version_group.url);
      gameSession.setGameDataByField("title", response.name);
    }, notification);
    setLoading(false);
  };

  const getVersionGroup = async (url: string) => {
    await gameDetailsModel.getVersionGroup(
      url,
      async (response) => {
        if (response.pokedexes.length) {
          await getPokedex(response.pokedexes[0].url);
        }
      },
      notification
    );
  };

  const getPokedex = async (url: string) => {
    await gameDetailsModel.getPokedex(
      url,
      (response) => setPokedex(response),
      notification
    );
  };

  return {
    pokedex,
    loading,
    setLoading,
  } as const;
};
