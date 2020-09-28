import {
  GameVersionDetails,
  GameVersionGroupDetails,
  Pokedex,
} from "../../@types/interfaces";
import { useStore } from "../../session/RootSession";
import { baseRequest } from "../../utils/baseRequest";

export const useGameDetailsModel = () => {
  const { gameSession } = useStore();

  const getGameDetails = async (
    handleRequest: (response: GameVersionDetails) => void,
    notificate: (
      message: string,
      status: "default" | "error" | "success" | "warning" | "info"
    ) => void
  ) => {
    await baseRequest(gameSession.gameVersionUrl, handleRequest, notificate);
  };

  const getVersionGroup = async (
    url: string,
    handleRequest: (response: GameVersionGroupDetails) => void,
    notificate: (
      message: string,
      status: "default" | "error" | "success" | "warning" | "info"
    ) => void
  ) => {
    await baseRequest(url, handleRequest, notificate);
  };

  const getPokedex = async (
    url: string,
    handleRequest: (response: Pokedex) => void,
    notificate: (
      message: string,
      status: "default" | "error" | "success" | "warning" | "info"
    ) => void
  ) => {
    await baseRequest(url, handleRequest, notificate);
  };

  return { getGameDetails, getVersionGroup, getPokedex };
};
