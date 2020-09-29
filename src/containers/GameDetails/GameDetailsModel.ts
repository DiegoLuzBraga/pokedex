import { GameVersionDetails } from "../../@types/interfaces";
import { baseRequest } from "../../utils/baseRequest";

export const useGameDetailsModel = () => {
  const getGameDetails = async (
    url: string,
    handleRequest: (response: GameVersionDetails) => void,
    notificate: (
      message: string,
      status: "default" | "error" | "success" | "warning" | "info"
    ) => void
  ) => {
    await baseRequest(url, handleRequest, notificate);
  };

  return { getGameDetails };
};
