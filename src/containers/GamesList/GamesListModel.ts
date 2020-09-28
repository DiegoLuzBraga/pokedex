import { GameVersion } from "../../@types/interfaces";
import { baseRequest } from "../../utils/baseRequest";

export const useGameListModel = () => {
  const getGames = async (
    handleRequest: (response: GameVersion) => void,
    notificate: (
      message: string,
      status: "default" | "error" | "success" | "warning" | "info",
    ) => void,
  ) => {
    await baseRequest("https://pokeapi.co/api/v2/version/", handleRequest, notificate);
  };
  
  const getMoreGames = async (
    url: string,
    handleRequest: (response: GameVersion) => void,
    notificate: (
      message: string,
      status: "default" | "error" | "success" | "warning" | "info",
    ) => void,
  ) => {
    await baseRequest(url, handleRequest, notificate);
  };

  return { getGames, getMoreGames };
};
