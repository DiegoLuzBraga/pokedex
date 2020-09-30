import { useEffect, useState } from "react";
import { GameVersion } from "../../@types/interfaces";
import { useNotification } from "../../hooks/useNotification";
import { useStore } from "../../session/RootSession";

export const useGameListViewModel = () => {
  const { gameModel, routerStore } = useStore();
  const notification = useNotification();
  const [gameList, setGameList] = useState<GameVersion>({
    results: [],
    count: 0,
    next: null,
    previous: null
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getGames();
  }, []);

  const getGames = async () => {
    setLoading(true);
    await gameModel.getGames(response => setGameList(response), notification);
    setLoading(false);
  };

  const handleGameClick = (url: string) => {
    gameModel.setGameVersionUrl(url);
    routerStore.push("/gameDetails");
  };

  return {
    gameList,
    loading,
    setGameList,
    setLoading,
    handleGameClick
  } as const;
};
