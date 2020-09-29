import { GameVersion, GameVersionDetails } from "../../@types/interfaces";
import { baseRequest } from "../../utils/baseRequest";
import { GameModelAbstract } from "./__abstract__";

export class GameModel extends GameModelAbstract {
  public getGames = async (
    handleRequest: (response: GameVersion) => void,
    notificate: (
      message: string,
      status: "default" | "error" | "success" | "warning" | "info"
    ) => void
  ) => {
    await baseRequest(
      "https://pokeapi.co/api/v2/generation/",
      handleRequest,
      notificate
    );
  };

  public getGameDetails = async (
    url: string,
    handleRequest: (response: GameVersionDetails) => void,
    notificate: (
      message: string,
      status: "default" | "error" | "success" | "warning" | "info"
    ) => void
  ) => {
    await baseRequest(url, handleRequest, notificate);
  };
}
