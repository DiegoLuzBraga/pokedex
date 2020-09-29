import { useEffect, useState } from "react";
import { GameVersion } from "../../@types/interfaces";
import { useNotification } from "../../hooks/useNotification";
import { useStore } from "../../session/RootSession";
import { useGameListModel } from "./GamesListModel";

export const useGameListViewModel = () => {
  const gameListModel = useGameListModel();
  const { gameSession, routerStore } = useStore();
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
    await gameListModel.getGames(
      response => setGameList(response),
      notification
    );
    setLoading(false);
  };

  const handleLoadMoreClick = async () => {
    setLoading(true);
    await gameListModel.getMoreGames(
      gameList.next ?? "",
      response =>
        setGameList({
          ...response,
          results: [...gameList.results, ...response.results]
        }),
      notification
    );
    setLoading(false);
  };

  const handleGameClick = (url: string) => {
    gameSession.setGameVersionUrl(url);
    routerStore.push("/gameDetails");
  };

  return {
    gameList,
    loading,
    setGameList,
    setLoading,
    handleLoadMoreClick,
    handleGameClick
  } as const;
};
